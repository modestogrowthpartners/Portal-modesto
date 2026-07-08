import Link from "next/link";
import { redirect } from "next/navigation";
import { getProfile } from "@/lib/auth";
import { signOut } from "@/lib/actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfile();
  if (!profile) redirect("/login");
  if (profile.role !== "admin") redirect("/portal");

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <nav className="flex items-center gap-6 text-sm">
            <span className="font-semibold">Admin · Modesto Growth</span>
            <Link href="/admin" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link
              href="/admin/clients"
              className="text-gray-600 hover:text-gray-900"
            >
              Clientes
            </Link>
            <Link
              href="/admin/documents"
              className="text-gray-600 hover:text-gray-900"
            >
              Entregas
            </Link>
          </nav>
          <form action={signOut}>
            <button className="text-sm text-gray-500 hover:text-gray-900">
              Sair
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
