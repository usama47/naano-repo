import { DashboardShell } from "@/components/dashboard/shell";
import { SessionProvider } from "@/components/dashboard/session";
import { getSessionUser } from "@/lib/session";

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const user = await getSessionUser();
  return (
    <SessionProvider user={user}>
      <DashboardShell user={user}>{children}</DashboardShell>
    </SessionProvider>
  );
}
