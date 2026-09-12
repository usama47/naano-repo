import { cookies } from "next/headers";
import { type SessionUser } from "@/lib/session-user";

export const SESSION_COOKIE = "naano_user";
export type { SessionUser };

export async function getSessionUser(): Promise<SessionUser | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    if (!parsed || typeof parsed.name !== "string" || typeof parsed.firstName !== "string" ||
        typeof parsed.email !== "string" || !parsed.firstName || parsed.name.length > 100 ||
        parsed.email.length > 254) return null;
    return { name: parsed.name, firstName: parsed.firstName, email: parsed.email };
  } catch {
    return null;
  }
}

export async function writeSessionUser(user: SessionUser) {
  (await cookies()).set(SESSION_COOKIE, encodeURIComponent(JSON.stringify(user)), {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSessionUser() {
  (await cookies()).delete(SESSION_COOKIE);
}
