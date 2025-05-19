import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaOrder() {
  const supabase = await createClient();
  const { data: orders } = await supabase
    .from("tesla order")
    .select("model, price, id, plan");
  return (
    <div>
      <div className="mx-3 flex flex-col space-y-2">
        {orders?.map((order) => (
          <Link href={"#"} key={order.id}>
            <div
              key={order.id}
              className="bg-skin flex items-center justify-between rounded-lg border px-3 py-2"
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
                  <span className="text-lg">
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
                  <span className="text-sm text-muted-foreground">
                    {order.model == "cyber-truck" ? (
                      <p>Utility Truck</p>
                    ) : order.model == "model-3" ? (
                      <p>Sports Sedan</p>
                    ) : order.model == "model-s" ? (
                      <p>Luxury Sedan</p>
                    ) : order.model == "model-x" ? (
                      <p>Luxury SUV</p>
                    ) : order.model == "model-y" ? (
                      <p>Midsize SUV</p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col items-center justify-between gap-y-1">
                <p>${order.price}</p>
                <p className="text-xs text-muted-foreground">
                  ${order.plan}/month
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
