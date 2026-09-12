import Link from "next/link";
import { signIn } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">Welcome back</h1>
      <p className="mt-2 text-sm text-muted">Explore the demo with a sample identity. No password or real account is required.</p>
      <form action={signIn} className="mt-8 grid gap-4">
        <label className="grid gap-1 text-sm font-medium">Demo email
          <input name="email" type="email" required defaultValue="reviewer@example.com" maxLength={254} className="h-12 rounded-2xl border border-border px-4 font-normal" />
        </label>
        <label className="grid gap-1 text-sm font-medium">Explore as
          <select name="role" className="h-12 rounded-2xl border border-border px-4 font-normal"><option value="creator">Creator</option><option value="brand">Brand</option></select>
        </label>
        <Button type="submit" className="h-12 rounded-2xl bg-auth text-base hover:bg-brand-strong">Enter demo</Button>
      </form>
      <p className="mt-5 text-xs text-muted">LinkedIn and Google sign-in are outside this demo&apos;s scope.</p>
      <p className="mt-6 text-sm text-muted">New here? <Link href="/register" className="font-medium text-ink">Choose your role</Link></p>
    </div>
  );
}
