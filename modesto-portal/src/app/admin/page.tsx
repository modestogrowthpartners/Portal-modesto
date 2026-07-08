import { createClient } from "@/lib/supabase/server";

const TIPOS = ["apresentacao", "concorrencia", "proposta"] as const;

function Card({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: clientsCount }, { data: docs }] = await Promise.all([
    supabase.from("clients").select("*", { count: "exact", head: true }),
    supabase
      .from("documents")
      .select("id, titulo, tipo, created_at, metadata")
      .order("created_at", { ascending: false })
      .limit(200),
  ]);

  const documents = docs ?? [];
  const porTipo = Object.fromEntries(
    TIPOS.map((t) => [t, documents.filter((d) => d.tipo === t).length])
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Visão geral</h1>
        <p className="text-sm text-gray-500">
          Métricas lidas do banco (documents.metadata alimenta esta área).
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card label="Clientes" value={clientsCount ?? 0} />
        <Card label="Apresentações" value={porTipo.apresentacao} />
        <Card label="Concorrência" value={porTipo.concorrencia} />
        <Card label="Propostas" value={porTipo.proposta} />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white">
        <div className="border-b border-gray-100 px-5 py-3">
          <h2 className="font-medium">Entregas recentes</h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {documents.slice(0, 10).map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between px-5 py-3 text-sm"
            >
              <span>{d.titulo}</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                {d.tipo}
              </span>
            </li>
          ))}
          {documents.length === 0 && (
            <li className="px-5 py-6 text-sm text-gray-500">
              Nenhuma entrega ainda.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
