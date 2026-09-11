import Link from "next/link";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(TOKEN);
  return (
    <span className={className}>
      {parts.map((part, index) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={index}>{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const href = link[2];
          const label = link[1];
          const external = href.startsWith("http");
          return (
            <Link
              key={index}
              href={href}
              className="underline decoration-[#111827]/20 underline-offset-4 hover:decoration-[#111827]"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </Link>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
