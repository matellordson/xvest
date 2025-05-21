import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaFavorite() {
  const supabase = await createClient();
  const { data: favorites } = await supabase
    .from("tesla favorite")
    .select("model, price, id, plan");
  return (
    <div>
      <div className="mx-3 flex flex-col space-y-2">
        {favorites?.map((favorite) => (
          <Link href={"#"} key={favorite.id} className="group">
            <div className="group flex items-center justify-between rounded-lg border bg-skin px-3 py-2 transition ease-in-out group-hover:bg-secondary">
              {/* left */}
              <div className="absolute left-6 mx-auto flex w-[88vw] items-center justify-center">
                {favorite.model == "cyber-truck" ? (
                  <Image
                    src={"/model-showcase/cyber-truck.png"}
                    alt={"cyber-truck"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : favorite.model == "model-3" ? (
                  <Image
                    src={"/model-showcase/model-3.png"}
                    alt={"model-3"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : favorite.model == "model-s" ? (
                  <Image
                    src={"/model-showcase/model-s.png"}
                    alt={"model-s"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : favorite.model == "model-x" ? (
                  <Image
                    src={"/model-showcase/model-x.png"}
                    alt={"model-x"}
                    priority
                    width={100}
                    height={100}
                    className="w-40 dark:opacity-80"
                  />
                ) : favorite.model == "model-y" ? (
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
                <div className="text-lg">
                  <span className="text-lg">
                    {favorite.model == "cyber-truck" ? (
                      <p>Cyber Truck</p>
                    ) : favorite.model == "model-3" ? (
                      <p>Model 3</p>
                    ) : favorite.model == "model-s" ? (
                      <p>Model S</p>
                    ) : favorite.model == "model-x" ? (
                      <p>Model X</p>
                    ) : favorite.model == "model-y" ? (
                      <p>Model Y</p>
                    ) : (
                      ""
                    )}
                  </span>
                  <p className="text-sm capitalize text-muted-foreground">
                    {favorite.model == "cyber-truck" ? (
                      <span>Utility Truck</span>
                    ) : favorite.model == "model-3" ? (
                      <span>Sspanorts Sedan</span>
                    ) : favorite.model == "model-s" ? (
                      <span>Luxury Sedan</span>
                    ) : favorite.model == "model-x" ? (
                      <span>Luxury SUV</span>
                    ) : favorite.model == "model-y" ? (
                      <span>Midsize SUV</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col items-end justify-between gap-y-1">
                <p className="font-semibold tracking-wide">
                  $
                  {favorite.price.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm tracking-wide text-muted-foreground">
                  $
                  {favorite.plan.toLocaleString("en-US", {
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
