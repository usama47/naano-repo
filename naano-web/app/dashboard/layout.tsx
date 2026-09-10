import { DashboardNav } from "@/components/dashboard/shell";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-surface lg:flex-row">
      <DashboardNav />
      <main className="flex-1 px-5 py-8 lg:px-10">{children}</main>
    </div>
  );
}
