export type Network = "linkedin" | "x" | "youtube" | "newsletter";

export type Creator = {
  id: string;
  slug: string;
  name: string;
  headline: string;
  /** Primary topic cluster used by marketplace filters. */
  topics: string[];
  country: string;
  countryCode: string;
  languages: string[];
  networks: Network[];
  followers: number;
  /** Flat price per sponsored post, set by the creator. */
  pricePerPost: number;
  /** Median engagement rate over the creator's last 30 posts. */
  engagementRate: number;
  medianImpressions: number;
  medianClicks: number;
  /** Share of bookings that reached a published post. */
  deliveryRate: number;
  responseHours: number;
  /** Audience fit score against the signed-in workspace's buyer profile. */
  fit: number;
  postsDelivered: number;
  vetted: boolean;
  bio: string;
  audience: {
    seniority: { label: string; share: number }[];
    industries: { label: string; share: number }[];
  };
  samplePosts: {
    id: string;
    excerpt: string;
    impressions: number;
    clicks: number;
    reactions: number;
  }[];
};

export type CampaignStatus = "draft" | "live" | "completed";

export type CollaborationStatus =
  | "invited"
  | "accepted"
  | "draft_review"
  | "scheduled"
  | "published";

export type Collaboration = {
  id: string;
  creatorSlug: string;
  creatorName: string;
  status: CollaborationStatus;
  fee: number;
  publishedAt: string | null;
  impressions: number;
  clicks: number;
  qualifiedClicks: number;
  leads: number;
};

export type Campaign = {
  id: string;
  name: string;
  objective: string;
  status: CampaignStatus;
  network: Network;
  budget: number;
  spend: number;
  startDate: string;
  landingUrl: string;
  keyMessages: string[];
  guidelines: string[];
  collaborations: Collaboration[];
  /** 8-week attribution series driving the dashboard chart. */
  timeseries: { week: string; impressions: number; clicks: number; leads: number }[];
};

export type CreatorFilters = {
  q: string;
  topic: string;
  network: string;
  minFollowers: number;
  maxPrice: number;
  sort: "fit" | "price_asc" | "price_desc" | "followers" | "engagement";
};
