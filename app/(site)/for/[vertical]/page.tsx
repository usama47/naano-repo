import { notFound } from "next/navigation";
import { Longform } from "@/components/marketing/longform";

const verticals: Record<string, { title: string; lede: string; buyers: string }> = {
  "sales-tech": { title: "B2B Influencer Marketing for Sales-Tech SaaS", lede: "Book sales and GTM creators your buyers already follow.", buyers: "AEs, sales leaders, and GTM operators" },
  revops: { title: "B2B Influencer Marketing for RevOps SaaS", lede: "Reach ops leaders through specialist LinkedIn voices.", buyers: "RevOps, enablement, and revenue systems owners" },
  devtools: { title: "B2B Influencer Marketing for Devtools", lede: "Technical creators, published per-post rates.", buyers: "engineering managers, platform teams, and staff ICs" },
  product: { title: "B2B Influencer Marketing for Product & PM Tools", lede: "Product voices with buyer-fit scoring.", buyers: "PMs, product ops, and design-adjacent buyers" },
  "hr-tech": { title: "B2B Influencer Marketing for HR-Tech", lede: "People-ops creators for HR software.", buyers: "People ops, TA leaders, and HRIS owners" },
  fintech: { title: "B2B Influencer Marketing for Fintech", lede: "Finance and fintech LinkedIn creators.", buyers: "CFOs, controllers, and fintech operators" },
  "marketing-ops": { title: "B2B Influencer Marketing for Martech & Marketing-Ops", lede: "Martech practitioners as the channel.", buyers: "marketing ops, demand gen, and RevTech buyers" },
  "vertical-saas": { title: "B2B Influencer Marketing for Vertical SaaS", lede: "Niche industry voices, not generic macros.", buyers: "operators inside a single industry, not generic SaaS generalists" },
};

export function generateStaticParams() {
  return Object.keys(verticals).map((vertical) => ({ vertical }));
}

export default async function VerticalPage({ params }: { params: Promise<{ vertical: string }> }) {
  const { vertical } = await params;
  const copy = verticals[vertical];
  if (!copy) notFound();
  return (
    <Longform title={copy.title} lede={copy.lede}>
      <p>
        Naano matches {copy.buyers} with vetted LinkedIn creators. Flat fee per post, tracked links, payouts handled. Audience fit is scored before follower count.
      </p>
      <p>
        Self-serve stays €0/month. Book a roster, launch in days, and attribute trials back to each post. If you want Naano to operate the channel, book a managed campaign call.
      </p>
    </Longform>
  );
}
