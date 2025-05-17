import { createClient } from "@/utils/supabase/client";

export default async function TeslaDashboard() {
  const supabase = createClient();
  const data = await supabase.from("tesla").select();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
