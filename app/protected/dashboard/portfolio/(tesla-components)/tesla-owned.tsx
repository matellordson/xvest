import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function TeslaOwned() {
  const supabase = await createClient();
  const { data: orders, count } = await supabase
    .from("tesla_order")
    .select("model, price, id, plan, paid", { count: "exact" })
    .order("created_at", { ascending: false })
    .eq("is_complete", true);

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
                  d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                  opacity="0.2"
                ></path>
                <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
              </svg>
              <p className="text-xl tracking-tight">Owned</p>
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
