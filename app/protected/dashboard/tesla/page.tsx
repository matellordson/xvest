"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function TeslaDashboard() {
  const path = usePathname();
  const supabase = createClient();
  const { data: teslaModel } = await supabase
    .from("tesla")
    .select("model, price, slug");
  return (
    <div className="divide-y space-y-2 w-fit">
      {teslaModel?.map((data) => (
        <div key={data.model}>
          <Link href={`${path}/invest/${data.slug}`}>{data.model}</Link>
          <p>${data.price}</p>
        </div>
      ))}
    </div>
  );
}
