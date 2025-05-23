import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaFavorite() {
  const supabase = await createClient();
  const { data: favorites, count } = await supabase
    .from("tesla_favorite")
    .select("model, price, id, plan", { count: "exact" })
    .order("created_at", { ascending: false });
  return (
    <div>
      <div className="mx-3 flex flex-col space-y-2">
        {count == 0 ? (
          ""
        ) : (
          <div className="flex items-center justify-between border-b border-dashed">
            <div className="flex w-full items-center justify-start gap-x-2 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 256 256"
                className="fill-primary"
              >
                <path
                  d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z"
                  opacity="0.2"
                ></path>
                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
              </svg>
              <p className="text-xl tracking-tight">Watchlist</p>
            </div>
            <button className="text-sm tracking-wide text-muted-foreground transition hover:text-primary">
              Edit
            </button>
          </div>
        )}
        <div className="divide-y">
          {favorites?.map((favorite) => (
            <div className="" key={favorite.id}>
              <Link href={"#"} className="group">
                <div className="flex items-center justify-between rounded px-3 py-2 transition-colors hover:shadow-lg group-hover:bg-muted dark:shadow-black">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
