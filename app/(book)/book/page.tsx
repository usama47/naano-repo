import type { Metadata } from "next";
import { BookScheduler } from "@/components/marketing/book-scheduler";

export const metadata: Metadata = {
  title: { absolute: "Book a campaign call — Naano" },
  description:
    "In 30 minutes, we'll map the right creator angles, campaign format and budget for your ICP. Book a free campaign strategy call with the Naano team.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return <BookScheduler />;
}
