import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default async function TeslaModels() {
  const supabase = createClient();
  const { data: teslaModel } = await supabase
    .from("tesla")
    .select("model, price, slug, price, type, plan1");

  return (
    <div className="mx-3 flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center justify-start gap-x-2 border-b border-dashed pb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 256 256"
            className="fill-primary"
          >
            <path
              d="M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112H224Z"
              opacity="0.2"
            ></path>
            <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z"></path>
          </svg>
          <p className="text-xl tracking-tight">Models</p>
        </div>
      </div>
      <div className="divide-y">
        {teslaModel?.map((data) => (
          <div className="" key={data.model}>
            <Link
              href={`/protected/dashboard/portfolio/invest/${data.slug}`}
              className="group"
            >
              <div className="flex items-center justify-between rounded px-3 py-2 transition-colors hover:shadow-lg group-hover:bg-muted dark:shadow-black">
                {/* left */}
                <div className="flex w-fit items-center justify-between gap-x-2">
                  <div className="">
                    <p className="text-lg">{data.model}</p>
                    <p className="text-sm capitalize text-muted-foreground">
                      {data.type}
                    </p>
                  </div>
                </div>
                {/* ceneter */}
                {/* <div className="absolute left-6 mx-auto flex w-[88vw] items-center justify-center">
                  {data.model == "Cyber Truck" ? (
                    <Image
                      src={"/model-showcase/cyber-truck.png"}
                      alt={"cyber-truck"}
                      priority
                      width={100}
                      height={100}
                      className="w-40 dark:opacity-80"
                    />
                  ) : data.model == "Model 3" ? (
                    <Image
                      src={"/model-showcase/model-3.png"}
                      alt={"model-3"}
                      priority
                      width={100}
                      height={100}
                      className="w-40 dark:opacity-80"
                    />
                  ) : data.model == "Model S" ? (
                    <Image
                      src={"/model-showcase/model-s.png"}
                      alt={"model-s"}
                      priority
                      width={100}
                      height={100}
                      className="w-40 dark:opacity-80"
                    />
                  ) : data.model == "Model X" ? (
                    <Image
                      src={"/model-showcase/model-x.png"}
                      alt={"model-x"}
                      priority
                      width={100}
                      height={100}
                      className="w-40 dark:opacity-80"
                    />
                  ) : data.model == "Model Y" ? (
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
                </div> */}
                {/* right */}
                <div className="flex flex-col items-end justify-between gap-y-1">
                  <p className="font-semibold tracking-wide">
                    $
                    {data.price.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="text-sm tracking-wide text-muted-foreground">
                    $
                    {data.plan1.toLocaleString("en-US", {
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
  );
}
