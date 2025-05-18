import { createClient } from "@/utils/supabase/server";

export const revalidate = 0;

export default async function TeslaFavorite() {
  const supabase = await createClient();
  const { data: favorite } = await supabase
    .from("tesla favorite")
    .select("model, price");
  return (
    <div>
      <pre>{JSON.stringify(favorite, null, 2)}</pre>
    </div>
  );
}
