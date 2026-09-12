"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar } from "@/components/ui/primitives";
import { threads } from "@/lib/data/creator-app";
import { cn } from "@/lib/utils";

export function Inbox() {
  const [activeId, setActiveId] = useState(threads[0]?.id);
  const [draft, setDraft] = useState("");
  const [local, setLocal] = useState(threads);
  const active = local.find((thread) => thread.id === activeId) ?? local[0];

  return (
    <div className="mx-auto flex min-h-[560px] max-w-5xl overflow-hidden rounded-3xl border border-border bg-white">
      <aside className="w-full max-w-[280px] border-r border-border">
        <div className="border-b border-border px-5 py-4">
          <p className="font-semibold">Messages</p>
          <p className="mt-0.5 text-xs text-muted">Sample conversations · replies stay on this page</p>
        </div>
        <ul>
          {local.map((thread) => (
            <li key={thread.id}>
              <button
                type="button"
                onClick={() => setActiveId(thread.id)}
                className={cn(
                  "flex w-full items-start gap-3 px-4 py-3.5 text-left hover:bg-surface",
                  thread.id === active?.id && "bg-[#edf2ff]",
                )}
              >
                <Avatar name={thread.from} size="sm" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{thread.from}</span>
                    <span className="shrink-0 text-[11px] text-muted">{thread.at}</span>
                  </span>
                  <span className="mt-0.5 line-clamp-2 text-xs text-muted">{thread.preview}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        {active ? (
          <>
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Avatar name={active.from} size="sm" />
              <div>
                <p className="text-sm font-semibold">{active.from}</p>
                <p className="text-xs text-muted">{active.role}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-5">
              {active.messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
                    message.from === "you"
                      ? "ml-auto bg-ink text-white"
                      : "bg-surface text-ink",
                  )}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form
              className="flex items-center gap-2 border-t border-border p-4"
              onSubmit={(event) => {
                event.preventDefault();
                const text = draft.trim();
                if (!text || !active) return;
                setLocal((current) =>
                  current.map((thread) =>
                    thread.id === active.id
                      ? {
                          ...thread,
                          preview: text,
                          messages: [
                            ...thread.messages,
                            { id: `local-${Date.now()}`, from: "you", text, at: "Now" },
                          ],
                        }
                      : thread,
                  ),
                );
                setDraft("");
              }}
            >
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={`Message ${active.from}`}
                className="h-11 flex-1 rounded-full border border-border px-4 text-sm outline-none focus:border-ink/30"
              />
              <button
                type="submit"
                className="grid size-11 place-items-center rounded-full bg-ink text-white"
                aria-label="Send"
              >
                <Send className="size-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="grid flex-1 place-items-center p-8 text-center text-sm text-muted">
            Select a conversation
          </div>
        )}
      </section>
    </div>
  );
}
