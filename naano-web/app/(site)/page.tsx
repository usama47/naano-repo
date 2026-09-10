import { Faq } from "@/components/marketing/faq";
import { PricingPlans } from "@/components/marketing/pricing-plans";
import {
  CaseStudy,
  CreatorShowcase,
  FinalCta,
  Hero,
  HowItWorksSteps,
  LogoMarquee,
  Pillars,
  StatsBand,
  TrustStrip,
} from "@/components/marketing/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Pillars />
      <HowItWorksSteps />
      <CaseStudy />
      <StatsBand />
      <CreatorShowcase />
      <TrustStrip />
      <PricingPlans />
      <Faq />
      <FinalCta />
    </>
  );
}
