import { cookies } from "next/headers";
import { type SessionUser } from "@/lib/session-user";

export const SESSION_COOKIE = "naano_user";
export type { SessionUser };

export async function getSessionUser(): Promise<SessionUser | null> {
  const raw = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as SessionUser;
    if (!parsed?.firstName) return null;
    return parsed;
  } catch {
    return null;
  }
}

export async function writeSessionUser(user: SessionUser) {
  (await cookies()).set(SESSION_COOKIE, encodeURIComponent(JSON.stringify(user)), {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSessionUser() {
  (await cookies()).delete(SESSION_COOKIE);
}
