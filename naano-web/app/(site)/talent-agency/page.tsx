import { ButtonLink } from "@/components/ui/button";
import { CloudScene } from "@/components/brand/logos";
import { Container } from "@/components/ui/container";

export default function TalentAgencyPage() {
  return (
    <CloudScene className="-mt-[72px] flex min-h-[80vh] items-center pb-20 pt-[108px]">
      <Container className="max-w-lg rounded-[32px] bg-white p-8">
        <h1 className="text-3xl font-semibold">Talent agency</h1>
        <p className="mt-3 text-sm text-muted">Manage a creator roster without individual creator logins.</p>
        <div className="mt-6 grid gap-3">
          <ButtonLink href="/login" className="justify-center bg-[#17181C]">
            Sign in
          </ButtonLink>
          <ButtonLink href="/register?type=creator-agency" variant="outline" className="justify-center">
            Create talent agency
          </ButtonLink>
        </div>
      </Container>
    </CloudScene>
  );
}
