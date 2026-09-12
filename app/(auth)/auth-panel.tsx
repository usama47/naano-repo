"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function AuthPanel() {
  const pathname = usePathname();
  const params = useSearchParams();
  const login = pathname.startsWith("/login");
  const influencer = params.get("role") === "influencer";

  if (login) {
    return (
      <div className="max-w-md">
        <h2 className="display text-[48px] leading-[1.05]">Welcome back.</h2>
        <p className="mt-5 text-lg leading-7 text-white/90">
          Sign in to manage your campaigns, creators and payouts, all in one place.
        </p>
      </div>
    );
  }

  if (influencer) {
    return (
      <div className="max-w-md">
        <h2 className="display text-[48px] leading-[1.05]">Get paid to post.</h2>
        <p className="mt-5 text-lg leading-7 text-white/90">
          Join 2,000+ creators booking brand deals on LinkedIn. Keep your voice. Get paid within 24h.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md">
      <h2 className="display text-[48px] leading-[1.05]">One platform. Two sides.</h2>
      <p className="mt-5 text-lg leading-7 text-white/90">
        Creators get paid to post. B2B brands get real pipeline. Pick where you fit and we&apos;ll set the rest up in a couple of minutes.
      </p>
    </div>
  );
}
