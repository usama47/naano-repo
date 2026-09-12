"use server";

import { redirect } from "next/navigation";
import { clearSessionUser, writeSessionUser } from "@/lib/session";
import { userFromAuth } from "@/lib/session-user";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  // Demo identity only: no password verification or production authorization.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.length > 254 || name.length > 100) redirect("/login");
  await writeSessionUser(userFromAuth(email, name));
  redirect(formData.get("role") === "brand" ? "/dashboard/campaigns" : "/dashboard");
}

export async function signOut() {
  await clearSessionUser();
  redirect("/");
}
