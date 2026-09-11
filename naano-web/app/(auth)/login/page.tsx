import Link from "next/link";
import { signIn } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">Welcome back</h1>
      <p className="mt-1 text-sm text-muted">Sign in to your account</p>
      <div className="mt-8 grid gap-3">
        <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-border text-sm font-medium">
          <span className="grid size-5 place-items-center rounded bg-[#0a66c2] text-[10px] font-bold text-white">in</span>
          Continue with LinkedIn
        </button>
        <button type="button" className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-border text-sm font-medium">
          <span className="text-base">G</span>
          Continue with Google
        </button>
      </div>
      <p className="my-6 text-center text-[11px] tracking-[0.14em] text-muted">OR CONTINUE WITH EMAIL</p>
      <form action={signIn} className="grid gap-4">
        <label className="grid gap-1 text-[11px] font-semibold tracking-[0.08em]">
          EMAIL
          <input
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="h-12 rounded-2xl border border-border px-4 text-sm font-normal"
          />
        </label>
        <label className="grid gap-1 text-[11px] font-semibold tracking-[0.08em]">
          <span className="flex items-center justify-between">
            PASSWORD
            <Link href="/login/forgot-password" className="font-medium tracking-normal text-brand">
              Forgot password?
            </Link>
          </span>
          <input name="password" type="password" className="h-12 rounded-2xl border border-border px-4 text-sm font-normal" />
        </label>
        <Button type="submit" className="h-12 rounded-2xl bg-auth text-base hover:bg-brand-strong">
          Sign in
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">
        Don't have an account?{" "}
        <Link href="/register" className="font-medium text-ink">
          Sign up
        </Link>
      </p>
    </div>
  );
}
