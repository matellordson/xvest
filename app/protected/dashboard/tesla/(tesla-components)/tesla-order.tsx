import { createClient } from "@/utils/supabase/server";

export const revalidate = 0;

export default async function TeslaOrder() {
  const supabase = await createClient();
  const { data: orders } = await supabase
    .from("tesla order")
    .select("model, price");
  return (
    <div>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </div>
  );
}
