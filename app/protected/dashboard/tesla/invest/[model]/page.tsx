import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import ModelX from "./customize-model/model-x";

export default async function InvestInModel({
  params,
}: {
  params: Promise<{ model: any }>;
}) {
  const { model } = await params;
  const supabase = createClient();
  const { data: tesla } = await supabase
    .from("tesla")
    .select()
    .eq("slug", model);

  const { data: plans } = await supabase
    .from("tesla")
    .select("plan1, plan2, plan3, plan4, plan5")
    .eq("slug", model);

  try {
    if (model == tesla![0].slug) {
      return (
        <div>
          <Link href="/protected/dashboard/tesla" className="pb-5">
            teslas
          </Link>
          <p className="font-semibold">{tesla![0].model}</p>
          <p>${tesla![0].price}</p>
          <hr />
          <div>
            <ModelX
              price={tesla![0].price}
              plan1={plans![0].plan1}
              plan2={plans![0].plan2}
              plan3={plans![0].plan3}
              plan4={plans![0].plan4}
              plan5={plans![0].plan5}
            />
          </div>
        </div>
      );
    }
  } catch (error) {
    return notFound();
  }
}
