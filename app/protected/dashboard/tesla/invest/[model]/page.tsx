import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";

export default async function InvestInModel({
  params,
}: {
  params: Promise<{ model: any }>;
}) {
  const { model } = await params;
  const supabase = createClient();
  const { data }: { data: any } = await supabase
    .from("tesla")
    .select("slug")
    .eq("slug", model)
    .limit(1);

  try {
    if (model == data[0].slug) {
      return <p>Buy {model}</p>;
    }
  } catch (error) {
    return notFound();
  }
}
