import Link from "next/link";
import { signIn } from "@/app/actions/auth";

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ role?: string; type?: string }> }) {
  const params = await searchParams;
  const role = params.role === "saas" || params.type === "brand-agency" ? "brand" :
    params.role === "influencer" || params.type === "creator-agency" ? "creator" : null;
  return (
    <div className="w-full max-w-md">
      <h1 className="text-[32px] font-semibold tracking-tight">{role ? `Explore as a ${role}` : "Create your demo profile"}</h1>
      <p className="mt-2 text-sm text-muted">Try the product with sample data. No real account is created.</p>
      {role ? (
        <form action={signIn} className="mt-8 grid gap-4">
          <input type="hidden" name="role" value={role} />
          <label className="grid gap-1 text-sm font-medium">Display name<input name="name" required maxLength={100} defaultValue="Demo Reviewer" className="h-12 rounded-2xl border border-border px-4 font-normal" /></label>
          <label className="grid gap-1 text-sm font-medium">Demo email<input name="email" type="email" required maxLength={254} defaultValue="reviewer@example.com" className="h-12 rounded-2xl border border-border px-4 font-normal" /></label>
          <button type="submit" className="h-12 rounded-2xl bg-auth text-sm font-medium text-white">Enter {role} demo</button>
          <Link href="/register" className="text-sm text-muted">Change role</Link>
        </form>
      ) : (
        <div className="mt-8 grid gap-3">
          <Link href="/register?role=influencer" className="rounded-2xl border border-border p-5 hover:border-ink"><p className="font-semibold">I&apos;m a creator</p><p className="mt-1 text-sm text-muted">Build your card and explore the creator workspace.</p></Link>
          <Link href="/register?role=saas" className="rounded-2xl border border-border p-5 hover:border-ink"><p className="font-semibold">I&apos;m a brand</p><p className="mt-1 text-sm text-muted">Find sample creators and prepare a campaign brief.</p></Link>
        </div>
      )}
      <p className="mt-6 text-sm text-muted">Already explored? <Link href="/login" className="font-medium text-ink">Enter demo</Link></p>
    </div>
  );
}
