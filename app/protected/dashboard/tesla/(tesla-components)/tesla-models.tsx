import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default async function TeslaModels() {
  const supabase = createClient();
  const { data: teslaModel } = await supabase
    .from("tesla")
    .select("model, price, slug, price, type");
  return (
    <div className="mx-3 flex flex-col gap-y-2">
      {teslaModel?.map((data) => (
        <div
          key={data.model}
          className="bg-skin flex items-center justify-between rounded-lg border px-3 py-2"
        >
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
          <div className="absolute left-6 mx-auto flex w-[88vw] items-center justify-center">
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
          </div>
          {/* right */}
          <div className="flex flex-col items-center justify-between gap-y-1">
            <Button
              asChild
              variant={"outline"}
              size={"sm"}
              className="relative"
            >
              <Link href={`tesla/invest/${data.slug}`}>Invest Now</Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Sarting ${data.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
