export type SessionUser = {
  name: string;
  firstName: string;
  email: string;
};

export function userFromAuth(email: string, name?: string): SessionUser {
  const emailSafe = email.trim().toLowerCase();
  const explicit = name?.trim();
  if (explicit) {
    const firstName = explicit.split(/\s+/).find(Boolean) ?? explicit;
    return { name: explicit, firstName, email: emailSafe };
  }

  const local = emailSafe.split("@")[0] ?? "";
  const parts = local.split(/[._+\-]+/).filter(Boolean);
  const titled = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());
  const full = titled.join(" ") || "there";
  return { name: full, firstName: titled[0] ?? "there", email: emailSafe };
}
