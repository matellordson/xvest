import { createClient } from "@/utils/supabase/client";
import { createClient as serverClient } from "@/utils/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import ModelX from "./customize-model/model-x";

export default async function InvestInModel({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model } = await params;
  const supabase = createClient();
  const supabaseServer = await serverClient();
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
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
            dashboard
          </Link>
          <p className="font-semibold">{tesla![0].model}</p>
          <p>${tesla![0].price}</p>
          <hr />
          <div>
            {model == "model-x" ? (
              <ModelX
                model={model}
                price={tesla![0].price}
                plan1={plans![0].plan1}
                plan2={plans![0].plan2}
                plan3={plans![0].plan3}
                plan4={plans![0].plan4}
                plan5={plans![0].plan5}
                user={user?.id}
              />
            ) : (
              "coming soon..."
            )}
          </div>
        </div>
      );
    }
  } catch (error) {
    return notFound();
  }
}
