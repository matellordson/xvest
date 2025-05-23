"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function adminUpdate(order: string, formData: FormData) {
  const paidValue = formData?.get("paid");
  const supabase = await createClient();
  const { error } = await supabase
    .from("tesla_order")
    .update({
      paid: paidValue,
    })
    .eq("id", order);

  if (error) {
    console.log(error);
  }

  redirect("/protected/dashboard");
}
