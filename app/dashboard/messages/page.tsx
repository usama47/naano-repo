import { Inbox } from "@/components/dashboard/inbox";
import { PageIntro } from "@/components/dashboard/empty-state";

export const metadata = { title: "Messages" };

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageIntro
        title="Messages"
        subtitle="Talk to NaanoBot, or to a brand once a collaboration is open. Nothing leaves this thread."
      />
      <div className="mt-8">
        <Inbox />
      </div>
    </div>
  );
}
