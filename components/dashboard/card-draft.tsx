"use client";

import { createContext, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { sessionCreator } from "@/lib/data/creator-app";
import { useSession } from "@/components/dashboard/session";

export type CardDraft = { name: string; headline: string; bio: string; price: number; languages: string; topics: string[] };
const CardContext = createContext<{ card: CardDraft; save: (card: CardDraft) => void } | null>(null);
const changed = "naano-card-updated";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changed, callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener(changed, callback); };
}

export function CardDraftProvider({ children }: { children: ReactNode }) {
  const user = useSession();
  const key = `naano:card:${user?.email || "guest"}`;
  const raw = useSyncExternalStore(subscribe, () => {
    try { return localStorage.getItem(key); } catch { return null; }
  }, () => null);
  const card = useMemo<CardDraft>(() => {
    if (raw) {
      try {
        const item = JSON.parse(raw);
        if (item && ["name", "headline", "bio", "languages"].every(k => typeof item[k] === "string") &&
            Number.isFinite(item.price) && item.price >= 0 && Array.isArray(item.topics) &&
            item.topics.every((t: unknown) => typeof t === "string")) return item;
      } catch { /* Invalid local data falls back to demo defaults. */ }
    }
    return { name: user?.name || "Your name", headline: sessionCreator.headline, bio: sessionCreator.bio,
      price: sessionCreator.pricePerPost, languages: sessionCreator.languages.join(", "), topics: sessionCreator.topics };
  }, [raw, user?.name]);
  function save(value: CardDraft) {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(changed));
  }
  return <CardContext.Provider value={{ card, save }}>{children}</CardContext.Provider>;
}

export function useCardDraft() {
  const value = useContext(CardContext);
  if (!value) throw new Error("CardDraftProvider is required");
  return value;
}
