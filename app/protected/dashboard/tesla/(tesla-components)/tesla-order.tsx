import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaOrder() {
  const supabase = await createClient();
  const { data: orders, count } = await supabase
    .from("tesla order")
    .select("model, price, id, plan, paid");

  return (
    <div>
      <div className="mx-3 flex flex-col space-y-2">
        {orders?.map((order) => (
          <Link href={"#"} key={order.id}>
            <div
              key={order.id}
              className="group flex items-center justify-between rounded-lg border bg-skin px-3 py-2 transition ease-in-out hover:opacity-90"
            >
              {/* left */}
              <div className="absolute left-6 mx-auto flex w-[88vw] items-center justify-center">
                {order.model == "cyber-truck" ? (
                  <Image
                    src={"/model-showcase/cyber-truck.png"}
                    alt={"cyber-truck"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : order.model == "model-3" ? (
                  <Image
                    src={"/model-showcase/model-3.png"}
                    alt={"model-3"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : order.model == "model-s" ? (
                  <Image
                    src={"/model-showcase/model-s.png"}
                    alt={"model-s"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : order.model == "model-x" ? (
                  <Image
                    src={"/model-showcase/model-x.png"}
                    alt={"model-x"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : order.model == "model-y" ? (
                  <Image
                    src={"/model-showcase/model-y.png"}
                    alt={"model-y"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="flex w-fit items-center justify-between gap-x-2">
                <div className="">
                  <p className="font-semibold tracking-wide">
                    $
                    {order.price.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <span className="text-sm tracking-wide text-muted-foreground">
                    {order.model == "cyber-truck" ? (
                      <p>Cyber Truck</p>
                    ) : order.model == "model-3" ? (
                      <p>Model 3</p>
                    ) : order.model == "model-s" ? (
                      <p>Model S</p>
                    ) : order.model == "model-x" ? (
                      <p>Model X</p>
                    ) : order.model == "model-y" ? (
                      <p>Model Y</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col items-end justify-between gap-y-1">
                <p className="font-semibold tracking-wide">
                  $
                  {order.paid.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm tracking-wide text-muted-foreground">
                  $
                  {order.plan.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                  <span className="text-xs">/mo</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
