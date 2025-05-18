import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function dashbaordPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: orders } = await supabase
    .from("tesla order")
    .select("model, price");

  const { data: favorite } = await supabase
    .from("tesla favorite")
    .select("model, price");

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="">
      <div className="">
        <p className="font-bold">Tesla</p>
        <Link
          href={"/protected/dashboard/tesla"}
          className="underline underline-offset-2"
        >
          invest
        </Link>
        <div className="border p-px mt-5">
          <p className="font-semibold w-fit">Orders</p>
          <pre>{JSON.stringify(orders, null, 2)}</pre>
        </div>
        <div className="border p-px mt-5">
          <p className="font-semibold w-fit">Favorite</p>
          <pre>{JSON.stringify(favorite, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
