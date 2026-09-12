"use client";

import { useState } from "react";

export function CookieBar() {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open ? (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-white p-4 text-sm shadow-[0_12px_40px_-20px_rgb(23_24_28/0.4)]">
          <p className="font-medium">Cookies</p>
          <p className="mt-1 text-muted">We use cookies to measure traffic and improve Naano.</p>
          <button
            type="button"
            className="mt-3 h-9 w-full rounded-full bg-ink text-sm text-white"
            onClick={() => setAccepted(true)}
          >
            Accept
          </button>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full bg-[#17181C] px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_-12px_rgb(23_24_28/0.6)]"
      >
        Cookies
      </button>
    </div>
  );
}
