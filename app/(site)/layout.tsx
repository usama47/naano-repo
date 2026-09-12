import { CommandBar } from "@/components/chrome/command-bar";
import { CookieBar } from "@/components/chrome/cookie-bar";
import { FeedbackTab } from "@/components/chrome/feedback-tab";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <CommandBar />
      <CookieBar />
      <FeedbackTab />
    </>
  );
}
