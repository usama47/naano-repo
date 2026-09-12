import type { Campaign, Collaboration } from "@/lib/types";

function collaboration(
  id: string,
  creatorSlug: string,
  creatorName: string,
  status: Collaboration["status"],
  fee: number,
  publishedAt: string | null,
  impressions: number,
  clickRate: number,
  leadRate: number,
): Collaboration {
  const clicks = Math.round(impressions * clickRate);
  const qualifiedClicks = Math.round(clicks * 0.62);
  return {
    id,
    creatorSlug,
    creatorName,
    status,
    fee,
    publishedAt,
    impressions,
    clicks,
    qualifiedClicks,
    leads: Math.round(qualifiedClicks * leadRate),
  };
}

export const campaigns: Campaign[] = [
  {
    id: "cmp_forecast_q3",
    name: "Forecast accuracy launch",
    objective: "Trial signups from mid-market sales leaders",
    status: "live",
    network: "linkedin",
    budget: 6500,
    spend: 4185,
    startDate: "2026-07-14",
    landingUrl: "https://example.com/forecast?utm_source=naano",
    keyMessages: [
      "Pipeline hygiene is the cheapest forecasting fix available",
      "Setup takes an afternoon, not a quarter",
      "Works with the CRM the team already has",
    ],
    guidelines: [
      "Write in your own voice, first person only",
      "Open with a specific number or a concrete failure",
      "One tracked link, placed in the first comment",
      "No feature lists, no superlatives",
    ],
    collaborations: [
      collaboration("col_001", "elena-marchetti", "Elena Marchetti", "published", 640, "2026-07-18", 48200, 0.021, 0.14),
      collaboration("col_002", "marcus-obi", "Marcus Obi", "published", 145, "2026-07-22", 11400, 0.034, 0.19),
      collaboration("col_003", "ana-beatriz-costa", "Ana Beatriz Costa", "published", 95, "2026-07-29", 7900, 0.041, 0.22),
      collaboration("col_004", "rahul-menon", "Rahul Menon", "published", 275, "2026-08-05", 17300, 0.028, 0.12),
      collaboration("col_005", "ismail-haddad", "Ismail Haddad", "scheduled", 165, null, 0, 0, 0),
      collaboration("col_006", "jonas-weber", "Jonas Weber", "draft_review", 1050, null, 0, 0, 0),
      collaboration("col_007", "sofia-lindqvist", "Sofia Lindqvist", "invited", 390, null, 0, 0, 0),
    ],
    timeseries: [
      { week: "Jul 13", impressions: 0, clicks: 0, leads: 0 },
      { week: "Jul 20", impressions: 48200, clicks: 1012, leads: 88 },
      { week: "Jul 27", impressions: 59600, clicks: 1400, leads: 121 },
      { week: "Aug 3", impressions: 67500, clicks: 1724, leads: 148 },
      { week: "Aug 10", impressions: 84800, clicks: 2208, leads: 186 },
      { week: "Aug 17", impressions: 91200, clicks: 2410, leads: 203 },
      { week: "Aug 24", impressions: 96400, clicks: 2554, leads: 217 },
      { week: "Aug 31", impressions: 99100, clicks: 2612, leads: 224 },
    ],
  },
  {
    id: "cmp_agents_pilot",
    name: "Back-office agents pilot",
    objective: "Demo requests from finance and ops leaders",
    status: "completed",
    network: "linkedin",
    budget: 3200,
    spend: 3070,
    startDate: "2026-05-06",
    landingUrl: "https://example.com/agents?utm_source=naano",
    keyMessages: [
      "Automate the routine path, staff the exceptions",
      "Audit trail on every automated action",
      "Live in two weeks with no data migration",
    ],
    guidelines: [
      "Show a real workflow, including what broke",
      "Screenshots encouraged",
      "Disclose the partnership in the first line",
    ],
    collaborations: [
      collaboration("col_101", "tobias-hansen", "Tobias Hansen", "published", 320, "2026-05-09", 21600, 0.037, 0.21),
      collaboration("col_102", "jonas-weber", "Jonas Weber", "published", 1050, "2026-05-16", 58900, 0.018, 0.16),
      collaboration("col_103", "nadia-petrova", "Nadia Petrova", "published", 110, "2026-05-21", 9100, 0.039, 0.24),
      collaboration("col_104", "yuki-tanaka", "Yuki Tanaka", "published", 430, "2026-05-28", 26400, 0.024, 0.11),
      collaboration("col_105", "daniel-okafor", "Daniel Okafor", "published", 890, "2026-06-04", 44300, 0.02, 0.13),
      collaboration("col_106", "camille-royer", "Camille Royer", "published", 480, "2026-06-11", 31200, 0.026, 0.15),
    ],
    timeseries: [
      { week: "May 4", impressions: 21600, clicks: 799, leads: 104 },
      { week: "May 11", impressions: 80500, clicks: 1859, leads: 216 },
      { week: "May 18", impressions: 89600, clicks: 2214, leads: 268 },
      { week: "May 25", impressions: 116000, clicks: 2848, leads: 316 },
      { week: "Jun 1", impressions: 160300, clicks: 3734, leads: 372 },
      { week: "Jun 8", impressions: 191500, clicks: 4545, leads: 445 },
      { week: "Jun 15", impressions: 196800, clicks: 4655, leads: 458 },
      { week: "Jun 22", impressions: 198200, clicks: 4681, leads: 462 },
    ],
  },
];

export function getCampaign(id: string) {
  return campaigns.find((campaign) => campaign.id === id);
}

export const COLLABORATION_LABELS: Record<Collaboration["status"], string> = {
  invited: "Invited",
  accepted: "Accepted",
  draft_review: "Draft review",
  scheduled: "Scheduled",
  published: "Published",
};

/** Rolls every campaign up into the numbers shown on the dashboard overview. */
export function workspaceTotals() {
  const published = campaigns.flatMap((campaign) =>
    campaign.collaborations.filter((collab) => collab.status === "published"),
  );

  const impressions = published.reduce((sum, collab) => sum + collab.impressions, 0);
  const qualifiedClicks = published.reduce((sum, collab) => sum + collab.qualifiedClicks, 0);
  const leads = published.reduce((sum, collab) => sum + collab.leads, 0);
  const spend = campaigns.reduce((sum, campaign) => sum + campaign.spend, 0);

  return {
    impressions,
    qualifiedClicks,
    leads,
    spend,
    postsLive: published.length,
    costPerLead: leads ? spend / leads : 0,
    costPerQualifiedClick: qualifiedClicks ? spend / qualifiedClicks : 0,
    /** Assumes a €640 average deal contribution per attributed lead for the pipeline figure. */
    attributedPipeline: leads * 640,
  };
}
