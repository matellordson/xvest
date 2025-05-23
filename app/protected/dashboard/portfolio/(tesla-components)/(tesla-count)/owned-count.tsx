import { createClient } from "@/utils/supabase/server";

export default async function OwnedCount() {
  const supabase = await createClient();
  const { count } = await supabase
    .from("tesla_order")
    .select("*", { count: "exact" })
    .eq("is_complete", true);
  return count;
}
