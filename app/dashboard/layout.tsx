import { DashboardShell } from "@/components/dashboard/shell";
import { SessionProvider } from "@/components/dashboard/session";
import { getSessionUser } from "@/lib/session";
import { CardDraftProvider } from "@/components/dashboard/card-draft";

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const user = await getSessionUser();
  return (
    <SessionProvider user={user}>
      <CardDraftProvider><DashboardShell user={user}>{children}</DashboardShell></CardDraftProvider>
    </SessionProvider>
  );
}
