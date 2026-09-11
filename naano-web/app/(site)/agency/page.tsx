import { ButtonLink } from "@/components/ui/button";
import { CloudScene } from "@/components/brand/logos";
import { Container } from "@/components/ui/container";

export default function AgencyGatePage() {
  return (
    <CloudScene className="-mt-[72px] flex min-h-[80vh] items-center pb-20 pt-[108px]">
      <Container className="max-w-lg rounded-[32px] bg-white p-8">
        <h1 className="text-3xl font-semibold">Agency portfolio</h1>
        <p className="mt-3 text-sm text-muted">Sign in to manage client workspaces, or create a brand agency account.</p>
        <div className="mt-6 grid gap-3">
          <ButtonLink href="/login" className="justify-center bg-[#17181C]">
            Sign in
          </ButtonLink>
          <ButtonLink href="/register?type=brand-agency" variant="outline" className="justify-center">
            Create agency account
          </ButtonLink>
        </div>
      </Container>
    </CloudScene>
  );
}
