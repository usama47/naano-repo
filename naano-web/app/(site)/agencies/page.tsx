import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CloudScene } from "@/components/brand/logos";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function AgenciesPage() {
  return (
    <>
      <CloudScene className="-mt-[72px] pb-24 pt-[108px] text-center">
        <Container>
          <span className="inline-flex rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[11px] tracking-[0.16em] text-ink/60">
            NAANO FOR AGENCIES
          </span>
          <h1 className="display mx-auto mt-7 max-w-4xl text-[44px] sm:text-[60px] lg:text-[68px]">
            Choose the workspace
            <br />
            that matches your agency.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[18px] leading-7 text-ink/65">
            Naano separates brand operations from creator management. Choose your setup and create the right workspace for your agency.
          </p>
          <ButtonLink href="#choose" size="lg" className="mt-9 h-12 bg-[#17181C] px-6">
            Choose your agency <ArrowRight className="size-4" />
          </ButtonLink>
        </Container>
      </CloudScene>

      <section id="choose" className="bg-white py-20">
        <Container>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/40">TWO DISTINCT PRODUCTS</p>
          <h2 className="display mt-3 max-w-xl text-[40px] sm:text-[48px]">
            What does your agency
            <br />
            manage?
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="rounded-[32px] border border-border p-8">
              <div className="flex items-center justify-between text-[12px] text-muted">
                <span>01</span>
                <span className="tracking-[0.14em]">BRAND AGENCY</span>
              </div>
              <h3 className="mt-8 text-[28px] font-semibold leading-tight">I manage campaigns for companies</h3>
              <p className="mt-3 text-sm text-muted">
                Operate separate client workspaces, budgets, campaigns and reporting from one portfolio.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Create one workspace per client", "Add and allocate client budgets", "Track campaigns and next actions"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 text-ink" /> {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/register?type=brand-agency" className="mt-8 bg-[#17181C]">
                Create a brand agency workspace
              </ButtonLink>
              <p className="mt-3 text-xs text-muted">You will create the agency manager account first.</p>
            </article>
            <article className="rounded-[32px] border border-border p-8">
              <div className="flex items-center justify-between text-[12px] text-muted">
                <span>02</span>
                <span className="tracking-[0.14em]">CREATOR AGENCY</span>
              </div>
              <h3 className="mt-8 text-[28px] font-semibold leading-tight">I represent and manage creators</h3>
              <p className="mt-3 text-sm text-muted">
                Import your roster, manage every profile and run collaborations without creator logins.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Import any creator roster CSV", "Manage rates and creator profiles", "Track collaborations and earnings"].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 size-4 text-ink" /> {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/register?type=creator-agency" className="mt-8 bg-[#17181C]">
                Create a creator agency workspace
              </ButtonLink>
              <p className="mt-3 text-xs text-muted">Your creators do not need individual Naano accounts.</p>
            </article>
          </div>
          <p className="mt-8 text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-ink">
              Sign in
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
