"use server";

import { redirect } from "next/navigation";
import { clearSessionUser, writeSessionUser } from "@/lib/session";
import { userFromAuth } from "@/lib/session-user";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  if (!email.trim()) redirect("/login");
  await writeSessionUser(userFromAuth(email, name));
  redirect("/dashboard");
}

export async function signOut() {
  await clearSessionUser();
  redirect("/");
}
