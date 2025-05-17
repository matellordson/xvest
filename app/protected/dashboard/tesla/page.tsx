import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default async function TeslaDashboard() {
  const supabase = createClient();
  const { data: teslaModel } = await supabase
    .from("tesla")
    .select("model, price, slug");
  return (
    <div className="divide-y w-fit">
      {teslaModel?.map((data) => (
        <div key={data.model}>
          <Link href={`tesla/invest/${data.slug}`}>{data.model}</Link>
        </div>
      ))}
    </div>
  );
}
