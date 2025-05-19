import { createClient } from "@/utils/supabase/server";

export default async function OrderCount() {
  const supabase = await createClient();
  const { count } = await supabase
    .from("tesla order")
    .select("*", { count: "exact" });
  return count;
}
