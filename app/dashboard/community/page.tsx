import { PageIntro } from "@/components/dashboard/empty-state";
import { Card } from "@/components/ui/primitives";
import { ButtonLink } from "@/components/ui/button";
import { communityHighlights } from "@/lib/data/creator-app";

export const metadata = { title: "Community" };

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Community"
        subtitle="Other B2B LinkedIn creators on Naano — pricing, briefs, and the unglamorous parts of getting paid to post."
        action={
          <ButtonLink href="/dashboard/affiliate" variant="outline">
            Invite a creator
          </ButtonLink>
        }
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {communityHighlights.map((item) => (
          <Card key={item.title} className="p-6">
            <p className="font-semibold">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-6 p-8 text-center">
        <p className="font-semibold">The feed stays quiet until you publish</p>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted">
          Community threads open after your first collaboration. Until then, bring someone you
          already read on LinkedIn — you both get paid faster with a full roster.
        </p>
        <ButtonLink href="/dashboard/messages" variant="outline" className="mt-6">
          Ask NaanoBot
        </ButtonLink>
      </Card>
    </div>
  );
}
