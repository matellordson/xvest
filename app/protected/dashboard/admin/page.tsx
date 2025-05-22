import { createClient } from "@/utils/supabase/server";
import { Order, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Order[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("tesla order")
    .select("model, price, plan, paid, balance");
  return [
    {
      user_email: "example@email.com",
      model: "Model 1",
      plan: 876,
      price: 897,
      paid: 9877,
      balance: 987,
    },
    // ...
  ];
}

export default async function AdminPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
