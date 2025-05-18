import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaModels() {
  const supabase = createClient();
  const { data: teslaModel } = await supabase
    .from("tesla")
    .select("model, price, slug");
  return (
    <div className="w-fit divide-y">
      {teslaModel?.map((data) => (
        <div key={data.model}>
          <Link href={`tesla/invest/${data.slug}`}>{data.model}</Link>
        </div>
      ))}
    </div>
  );
}
