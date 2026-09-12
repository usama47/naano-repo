import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const eur = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatEur(value: number) {
  return eur.format(value);
}

export function formatCompact(value: number) {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatPercent(value: number, fractionDigits = 1) {
  return `${value.toFixed(fractionDigits)}%`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/** Deterministic pastel-ish avatar background so mock creators look distinct. */
export function avatarTone(seed: string) {
  const hash = [...seed].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const tones = [
    "bg-[#e5e1ff] text-[#3325e6]",
    "bg-[#ffe8d6] text-[#a4501a]",
    "bg-[#d8f3e3] text-[#0d7a3c]",
    "bg-[#ffe1ec] text-[#a81a52]",
    "bg-[#e0eeff] text-[#14549e]",
    "bg-[#f2e9d8] text-[#7a5a14]",
  ];
  return tones[hash % tones.length];
}
