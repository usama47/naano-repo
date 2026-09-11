import { EmptyState, PageIntro } from "@/components/dashboard/empty-state";
import { ButtonLink } from "@/components/ui/button";
import { collaborations } from "@/lib/data/creator-app";

export const metadata = { title: "Collaborations" };

export default function CollaborationsPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Collaborations"
        subtitle="Every deal you accept lives here — brief, draft, scheduled post and payout, in one thread."
      />
      {collaborations.length === 0 ? (
        <EmptyState
          title="No collaborations yet"
          body="Accept a brand deal from Opportunities. Once you do, the brief, review and publish date will show up here."
          action={
            <ButtonLink href="/dashboard/opportunities">Browse opportunities</ButtonLink>
          }
        />
      ) : null}
    </div>
  );
}
