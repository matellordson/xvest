import { createClient } from "@/utils/supabase/server";
import { Order, columns } from "./columns";
import { DataTable } from "./data-table";

export const revalidate = 0;

async function getData(): Promise<Order[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("tesla_order")
    .select("model, plan, price,  paid, email, id")
    .eq("is_complete", false);
  return data as Order[];
}

export default async function AdminPage() {
  const data = await getData();

  return (
    <div className="mx-auto px-3 py-10">
      <p className="text-2xl font-semibold">Admin Panel</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
