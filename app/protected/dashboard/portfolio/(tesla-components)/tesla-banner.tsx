import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function TeslaBanner() {
  const supabase = await createClient();
  const { data: priceData } = await supabase
    .from("tesla_order")
    .select("price");
  const totalPrice: number = priceData!
    .map((row) => row.price)
    .reduce((sum, price) => sum + price, 0);

  const { data: paidData } = await supabase.from("tesla_order").select("paid");
  const totalPaid: number = paidData!
    .map((row) => row.paid)
    .reduce((sum, price) => sum + price, 0);

  return (
    <div className="flex h-44 w-full justify-between rounded-lg border">
      <div className="space-y-4">
        <div>
          <Image
            src="/logo/tesla-gallery-logos/04_0x0-Tesla_Wordmark_10_White.png"
            alt="tesla logo"
            width={150}
            height={150}
            className={`ml-1 mt-1 ${"hidden dark:block"}`}
            priority
          />
          <Image
            src="/logo/tesla-gallery-logos/08_0x0-Tesla_Wordmark_10_Black.png"
            alt="tesla logo"
            width={150}
            height={150}
            className={`ml-1 mt-1 ${"dark:hidden"}`}
            priority
          />
        </div>
        <div className="space-y-1 px-4">
          <div className="">
            <p className="text-xs tracking-wide text-muted-foreground">
              Total Investment
            </p>
          </div>
          <p className="text-4xl font-semibold tracking-wide">
            ${totalPaid.toLocaleString("en-US", { maximumFractionDigits: 2 })}
          </p>
          <p className="text-2xl tracking-wide text-muted-foreground">
            ${totalPrice.toLocaleString("en-US", { maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}
