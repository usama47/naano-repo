import Link from "next/link";
import { signIn } from "@/app/actions/auth";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string; type?: string }>;
}) {
  const params = await searchParams;
  const role = params.role;
  const type = params.type;

  if (role === "influencer" || type === "creator-agency") {
    return <RoleForm title="Create your creator account" subtitle="Get paid to post for B2B brands." />;
  }
  if (role === "saas" || type === "brand-agency") {
    return <RoleForm title="Create your brand account" subtitle="Find creators and launch campaigns." />;
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">Create your account</h1>
      <p className="mt-1 text-sm text-muted">First, who are you here as?</p>
      <div className="mt-8 grid gap-3">
        <Link href="/register?role=influencer" className="rounded-2xl border border-border p-5 hover:border-ink">
          <p className="font-semibold">I'm a creator</p>
          <p className="mt-1 text-sm text-muted">Get paid to create LinkedIn content for B2B brands you actually use.</p>
        </Link>
        <Link href="/register?role=saas" className="rounded-2xl border border-border p-5 hover:border-ink">
          <p className="font-semibold">I'm a brand</p>
          <p className="mt-1 text-sm text-muted">Find creators, launch campaigns, and trace real pipeline back to each post.</p>
        </Link>
      </div>
      <p className="mt-6 text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-ink">
          Sign in
        </Link>
      </p>
    </div>
  );
}

function RoleForm({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">{title}</h1>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <div className="mt-8 grid gap-3">
        <button type="button" className="h-12 rounded-2xl border border-border text-sm font-medium">
          Continue with LinkedIn
        </button>
        <button type="button" className="h-12 rounded-2xl border border-border text-sm font-medium">
          Continue with Google
        </button>
      </div>
      <form action={signIn} className="mt-6 grid gap-3">
        <input name="name" type="text" required placeholder="Full name" className="h-12 rounded-2xl border border-border px-4 text-sm" />
        <input name="email" type="email" required placeholder="Email" className="h-12 rounded-2xl border border-border px-4 text-sm" />
        <input name="password" type="password" placeholder="Password" className="h-12 rounded-2xl border border-border px-4 text-sm" />
        <button type="submit" className="h-12 rounded-2xl bg-auth text-sm font-medium text-white">
          Create account
        </button>
      </form>
    </div>
  );
}
