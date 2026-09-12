import Link from "next/link";
export default function ForgotPasswordPage() {
  return <div className="w-full max-w-md"><h1 className="text-[32px] font-semibold tracking-tight">No password needed</h1><p className="mt-3 text-sm text-muted">This demo uses a sample identity. Password reset emails and real account authentication are not connected.</p><Link href="/login" className="mt-6 inline-block rounded-full bg-auth px-6 py-3 text-white">Enter the demo</Link></div>;
}
