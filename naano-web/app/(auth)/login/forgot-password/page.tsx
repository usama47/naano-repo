import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">Reset password</h1>
      <p className="mt-2 text-sm text-muted">Enter your email and we'll send a reset link.</p>
      <form className="mt-8 grid gap-4">
        <input type="email" placeholder="john@company.com" className="h-12 rounded-2xl border border-border px-4 text-sm" />
        <Button type="submit" className="h-12 rounded-2xl bg-auth hover:bg-brand-strong">
          Send reset link
        </Button>
      </form>
      <Link href="/login" className="mt-6 inline-block text-sm">
        Back to sign in
      </Link>
    </div>
  );
}
