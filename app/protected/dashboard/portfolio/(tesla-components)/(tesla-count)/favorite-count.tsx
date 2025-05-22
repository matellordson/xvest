import { createClient } from "@/utils/supabase/server";

export default async function FavoriteCount() {
  const supabase = await createClient();
  const { count } = await supabase
    .from("tesla_favorite")
    .select("*", { count: "exact" });
  return count;
}
