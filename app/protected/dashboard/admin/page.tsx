import { createClient } from "@/utils/supabase/server";
import { Order, columns } from "./columns";
import { DataTable } from "./data-table";

export const revalidate = 0;

async function getData(): Promise<Order[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("tesla_order")
    .select("model, plan, price,  paid, balance, user_email");
  return data as Order[];
}

export default async function AdminPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
