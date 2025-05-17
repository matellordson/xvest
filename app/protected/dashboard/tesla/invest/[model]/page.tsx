import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function InvestInModel({
  params,
}: {
  params: Promise<{ model: any }>;
}) {
  const { model } = await params;
  const supabase = createClient();
  const { data: tesla }: { data: any } = await supabase
    .from("tesla")
    .select()
    .eq("slug", model);

  const { data: plans } = await supabase
    .from("tesla")
    .select("plan1, plan2, plan3, plan4, plan5")
    .eq("slug", model);

  try {
    if (model == tesla[0].slug) {
      return (
        <div>
          <p>{tesla[0].model}</p>
          <p>${tesla[0].price}</p>
          <hr />
          <p>Choose investment plan</p>
          <div>
            {plans?.map((plan) => (
              <div key={plan.plan1} className="flex flex-col space-y-2 w-fit">
                <button className="border p-px">${plan.plan1}/month</button>
                <button className="border p-px">${plan.plan2}/month</button>
                <button className="border p-px">${plan.plan3}/month</button>
                <button className="border p-px">${plan.plan4}/month</button>
                <button className="border p-px">${plan.plan5}/month</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  } catch (error) {
    return notFound();
  }
}
