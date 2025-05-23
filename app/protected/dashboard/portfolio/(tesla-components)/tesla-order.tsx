import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaOrder() {
  const supabase = await createClient();
  const { data: orders, count } = await supabase
    .from("tesla_order")
    .select("model, price, id, plan, paid", { count: "exact" })
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="mx-3 flex flex-col space-y-2">
        {count == 0 ? (
          <div className="flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#000000"
              viewBox="0 0 256 256"
              className="fill-primary opacity-70"
            >
              <path
                d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z"
                opacity="0.2"
              ></path>
              <path d="M198.24,62.63l15.68-17.25a8,8,0,0,0-11.84-10.76L186.4,51.86A95.95,95.95,0,0,0,57.76,193.37L42.08,210.62a8,8,0,1,0,11.84,10.76L69.6,204.14A95.95,95.95,0,0,0,198.24,62.63ZM48,128A80,80,0,0,1,175.6,63.75l-107,117.73A79.63,79.63,0,0,1,48,128Zm80,80a79.55,79.55,0,0,1-47.6-15.75l107-117.73A79.95,79.95,0,0,1,128,208Z"></path>
            </svg>
            <p className="text-xl font-semibold text-muted-foreground">
              Oops! Nothing yet
            </p>
          </div>
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
                  d="M240,132c0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44h0C146.76,156.85,176,142,176,124V96.72h0C212.52,100.06,240,114.58,240,132ZM176,84c0-19.88-35.82-36-80-36S16,64.12,16,84s35.82,36,80,36S176,103.88,176,84Z"
                  opacity="0.2"
                ></path>
                <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
              </svg>
              <p className="text-xl tracking-tight">Portfolio</p>
            </div>
            <button className="text-sm tracking-wide text-muted-foreground transition hover:text-primary">
              Edit
            </button>
          </div>
        )}
        <div className="divide-y">
          {orders?.map((order) => (
            <div className="" key={order.id}>
              <Link href={"#"} className="group">
                <div className="flex items-center justify-between rounded px-3 py-2 transition-colors hover:shadow-lg group-hover:bg-muted dark:shadow-black">
                  {/* left */}
                  {/* <div className="absolute left-6 mx-auto flex w-[88vw] items-center justify-center">
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
                  </div> */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
