import { redirect } from "next/navigation";
import { getProfile } from "@/lib/auth";
import { signOut } from "@/lib/actions";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfile();
  if (!profile) redirect("/login");
  // Admin usa a área /admin.
  if (profile.role === "admin") redirect("/admin");

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <span className="font-semibold">Modesto Growth · Portal</span>
          <form action={signOut}>
            <button className="text-sm text-gray-500 hover:text-gray-900">
              Sair
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
    </div>
  );
}
