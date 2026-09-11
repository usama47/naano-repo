"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function SelectionPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white pb-20">
      <div className="sky-photo py-16">
        <Container className="max-w-xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-ink/45">FREE CREATOR SEARCH</p>
          <h1 className="display mt-3 text-[40px] sm:text-[48px]">Find LinkedIn Creators for B2B</h1>
          <p className="mt-3 text-ink/65">Tell us who you sell to. We'll shortlist matching creators.</p>
        </Container>
      </div>
      <Container className="max-w-xl">
        {sent ? (
          <p className="mt-10 rounded-[28px] bg-[#eaf6fd] p-6">Request received. We'll send a shortlist shortly.</p>
        ) : (
          <form
            className="mt-10 grid gap-4"
            onSubmit={async (event) => {
              event.preventDefault();
              const data = Object.fromEntries(new FormData(event.currentTarget));
              await fetch("/api/selection", { method: "POST", body: JSON.stringify(data) });
              setSent(true);
            }}
          >
            <input name="company" required placeholder="Company" className="h-12 rounded-2xl border border-border px-4" />
            <input name="vertical" required placeholder="Vertical (e.g. RevOps)" className="h-12 rounded-2xl border border-border px-4" />
            <input name="email" type="email" required placeholder="Work email" className="h-12 rounded-2xl border border-border px-4" />
            <Button type="submit" className="h-12 bg-[#17181C]">
              Get creator matches
            </Button>
          </form>
        )}
      </Container>
    </div>
  );
}
