import html
import json
import re
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(r"c:\Users\PC\OneDrive - ACME ONE\Desktop\Naano\naano-repo\naano-web")
OUT = ROOT / "lib" / "content" / "articles-live.json"

SLUGS = [
    "b2b-influencer-marketing-cost",
    "launch-b2b-linkedin-creator-campaign",
    "linkedin-creator-marketplace-europe",
    "how-to-pay-b2b-creators",
    "linkedin-creator-marketplace-explained",
    "what-is-a-b2b-creator-marketplace",
    "creator-led-growth-b2b",
    "linkedin-ads-vs-creator-led-cpl",
    "nano-vs-macro-creators-b2b-ctr",
    "b2b-influence-linkedin",
    "founder-led-distribution-b2b-saas",
    "naano-vs-alternatives",
    "b2b-creator-campaign-tracking-template",
    "linkedin-sponsored-post-usage-rights",
    "how-to-find-brand-deals-on-linkedin",
    "modash-alternative-b2b-linkedin",
    "ai-search-cites-people-not-brands",
    "how-long-b2b-creator-campaign-takes",
    "sponsored-post-brief-to-published-playbook",
    "naano-vs-passionfroot",
    "b2b-creator-campaigns-europe-answers",
    "linkedin-creator-discount-trap",
    "linkedin-sponsored-post-price-index-2026",
    "how-much-charge-sponsored-linkedin-post",
    "how-to-choose-b2b-influencer-marketing-platform",
    "linkedin-engagement-rate-benchmarks",
    "linkedin-thought-leader-ads-vs-creator-posts",
    "sponsored-linkedin-post-cost-b2b",
    "best-b2b-creator-marketplace",
    "get-paid-for-linkedin-posts-creator",
    "naano-vs-kolsquare",
    "naano-vs-skeepers",
    "naano-vs-traackr",
    "linkedin-creator-marketplace-vs-naano",
    "creator-led-growth-90-day-playbook",
    "forecast-b2b-pipeline-creator-cpc",
    "linkedin-dwell-time-b2b-creators",
    "cpc-vs-flat-fee-b2b-creator-sponsorship",
    "creator-led-growth-vs-cold-outbound-b2b",
    "linkedin-outbound-creator-stack",
    "micro-creator-portfolio-b2b-saas",
    "b2b-influencer-agency-vs-platform",
    "how-to-find-b2b-creators-linkedin",
    "employee-advocacy-vs-creator-led-growth",
    "measure-roi-b2b-creator-marketing-linkedin",
    "founder-diy-vs-hiring-creators",
    "how-to-write-b2b-sponsored-post",
    "linkedin-algorithm-2026-creators-vs-brands",
    "naano-vs-favikon",
    "naano-vs-gaggleamp",
    "naano-vs-influitive",
    "naano-vs-lemlist",
    "naano-vs-upfluence",
]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "NaanoClone/1.0"})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read().decode("utf-8", "ignore")


def decode(text: str) -> str:
    return html.unescape(text).replace("\xa0", " ").strip()


def rich(fragment: str) -> str:
    fragment = re.sub(r"<!--.*?-->", "", fragment, flags=re.S)

    def link(match: re.Match[str]) -> str:
        href = decode(match.group(1))
        label = rich(match.group(2))
        return f"[{label}]({href})"

    fragment = re.sub(r"<a\s+[^>]*href=\"([^\"]+)\"[^>]*>(.*?)</a>", link, fragment, flags=re.S | re.I)
    fragment = re.sub(r"</?(strong|b)>", "**", fragment, flags=re.I)
    fragment = re.sub(r"</?(em|i)>", "*", fragment, flags=re.I)
    fragment = re.sub(r"<br\s*/?>", "\n", fragment, flags=re.I)
    fragment = re.sub(r"<[^>]+>", "", fragment)
    fragment = decode(fragment)
    fragment = re.sub(r"[ \t]+\n", "\n", fragment)
    fragment = re.sub(r"\n{3,}", "\n\n", fragment)
    fragment = re.sub(r" {2,}", " ", fragment)
    return fragment.strip()


def cells(row_html: str, tag: str) -> list[str]:
    return [rich(cell) for cell in re.findall(rf"<{tag}[^>]*>(.*?)</{tag}>", row_html, flags=re.S | re.I)]


def parse_table(table_html: str) -> dict:
    headers: list[str] = []
    rows: list[list[str]] = []
    thead = re.search(r"<thead[^>]*>(.*?)</thead>", table_html, flags=re.S | re.I)
    if thead:
        header_row = re.search(r"<tr[^>]*>(.*?)</tr>", thead.group(1), flags=re.S | re.I)
        if header_row:
            headers = cells(header_row.group(1), "th") or cells(header_row.group(1), "td")
    body = re.search(r"<tbody[^>]*>(.*?)</tbody>", table_html, flags=re.S | re.I)
    body_html = body.group(1) if body else table_html
    for row in re.findall(r"<tr[^>]*>(.*?)</tr>", body_html, flags=re.S | re.I):
        vals = cells(row, "td") or cells(row, "th")
        if vals and vals != headers:
            rows.append(vals)
    return {"type": "table", "headers": headers, "rows": rows}


def parse_list(list_html: str, kind: str) -> dict:
    items = [rich(item) for item in re.findall(r"<li[^>]*>(.*?)</li>", list_html, flags=re.S | re.I)]
    return {"type": kind, "items": [item for item in items if item]}


def parse_blocks(prose_html: str) -> list[dict]:
    blocks: list[dict] = []
    pattern = re.compile(
        r"<(h2|h3|p|table|ul|ol)(\s[^>]*)?>(.*?)</\1>",
        flags=re.S | re.I,
    )
    for match in pattern.finditer(prose_html):
        tag = match.group(1).lower()
        inner = match.group(3)
        if tag in {"h2", "h3", "p"}:
            text = rich(inner)
            if text:
                blocks.append({"type": tag, "text": text})
        elif tag == "table":
            table = parse_table(match.group(0))
            if table["headers"] or table["rows"]:
                blocks.append(table)
        elif tag in {"ul", "ol"}:
            parsed = parse_list(match.group(0), tag)
            if parsed["items"]:
                blocks.append(parsed)
    return blocks


def parse_article(slug: str, page: str) -> dict:
    hero = re.search(
        r'<section class="relative[^"]*text-white"[^>]*style="background:linear-gradient\(135deg,\s*([^"]+)\)"(.*?)</section>',
        page,
        flags=re.S,
    )
    hero_html = hero.group(2) if hero else page
    title = rich(re.search(r"<h1[^>]*>(.*?)</h1>", hero_html, flags=re.S).group(1)) if re.search(r"<h1", hero_html) else slug
    lede_match = re.search(r"<h1[^>]*>.*?</h1>\s*<p[^>]*>(.*?)</p>", hero_html, flags=re.S)
    lede = rich(lede_match.group(1)) if lede_match else ""
    minutes_match = re.search(r"(\d+)\s*(?:<!-- -->\s*)?min read", hero_html)
    minutes = int(minutes_match.group(1)) if minutes_match else 8
    cat_match = re.search(r'uppercase tracking-\[[^\]]+\] text-white/85">.*?<span class="font-semibold">([^<]+)</span>', hero_html, flags=re.S)
    category = decode(cat_match.group(1)) if cat_match else "Field notes"

    article_match = re.search(r"<article[^>]*>(.*?)</article>", page, flags=re.S)
    article_html = article_match.group(1) if article_match else page

    author = "Naano team"
    role = "Editorial"
    linkedin = None
    avatar = None
    author_match = re.search(
        r'<a href="(https://www\.linkedin\.com/[^"]+)"[^>]*>.*?alt="([^"]+)".*?url=%2F([^&]+).*?<span class="block text-xs[^"]*">([^<]+)</span>',
        article_html,
        flags=re.S,
    )
    if author_match:
        linkedin = decode(author_match.group(1))
        author = decode(author_match.group(2))
        avatar = "/" + decode(author_match.group(3))
        role = decode(author_match.group(4))
    else:
        name_match = re.search(r'group-hover:underline">([^<]+)</span>', article_html)
        role_match = re.search(r'block text-xs text-\[#6B7280\]">([^<]+)</span>', article_html)
        if name_match:
            author = decode(name_match.group(1))
        if role_match:
            role = decode(role_match.group(1))

    published = None
    updated = None
    pub = re.search(r"Published.*?dateTime=\"([^\"]+)\"[^>]*>([^<]+)</time>", article_html, flags=re.S)
    if pub:
        published = decode(pub.group(2))
    upd = re.search(r"Updated.*?dateTime=\"([^\"]+)\"[^>]*>([^<]+)</time>", article_html, flags=re.S)
    if upd:
        updated = decode(upd.group(2))

    prose_match = re.search(r'<div class="prose-blog[^"]*"(.*)$', article_html, flags=re.S)
    prose_html = prose_match.group(1) if prose_match else article_html
    # drop opening tag remainder
    gt = prose_html.find(">")
    if gt != -1:
        prose_html = prose_html[gt + 1 :]

    tags = [decode(tag) for tag in re.findall(r'rounded-full px-3 py-1">([^<]+)</span>', article_html)]
    blocks = parse_blocks(prose_html)

    return {
        "slug": slug,
        "title": title,
        "lede": lede,
        "category": category,
        "author": author,
        "role": role,
        "published": published or "2026",
        "updated": updated,
        "minutes": minutes,
        "linkedin": linkedin,
        "avatar": avatar,
        "tags": tags,
        "blocks": blocks,
    }


def scrape_one(slug: str) -> dict:
    page = fetch(f"https://naano.com/blog/{slug}")
    article = parse_article(slug, page)
    print(f"OK {slug} blocks={len(article['blocks'])} tables={sum(1 for b in article['blocks'] if b['type']=='table')}", flush=True)
    return article


def main() -> None:
    articles: dict[str, dict] = {}
    errors: list[str] = []
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(scrape_one, slug): slug for slug in SLUGS}
        for future in as_completed(futures):
            slug = futures[future]
            try:
                articles[slug] = future.result()
            except Exception as exc:  # noqa: BLE001
                errors.append(f"{slug}: {exc}")
                print(f"FAIL {slug}: {exc}", flush=True)

    missing = [slug for slug in SLUGS if slug not in articles]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", OUT, "count", len(articles), "missing", missing, "errors", errors)


if __name__ == "__main__":
    main()
