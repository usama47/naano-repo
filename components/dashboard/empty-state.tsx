import type { ReactNode } from "react";
import { Card } from "@/components/ui/primitives";

export function PageIntro({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="display text-[32px] font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <Card className="mt-8 grid place-items-center px-6 py-16 text-center">
      <p className="text-base font-semibold">{title}</p>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted">{body}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </Card>
  );
}
