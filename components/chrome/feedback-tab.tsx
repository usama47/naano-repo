"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function FeedbackTab() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-20 right-5 z-30">
      {open ? (
        <div className="mb-3 w-64 rounded-2xl border border-border bg-white p-4 text-sm shadow-[0_12px_40px_-20px_rgb(23_24_28/0.4)]">
          <p className="font-medium">Feedback</p>
          <p className="mt-1 text-muted">Tell us what to improve on this page.</p>
        </div>
      ) : null}
      <button
        type="button"
        aria-label="Feedback"
        onClick={() => setOpen((value) => !value)}
        className="grid size-12 place-items-center rounded-full bg-[#17181C] text-white shadow-[0_10px_30px_-12px_rgb(23_24_28/0.7)]"
      >
        <MessageCircle className="size-5" />
      </button>
    </div>
  );
}
