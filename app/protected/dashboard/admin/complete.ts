"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Complete(order: string, formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("tesla_order")
    .update({
      is_complete: true,
    })
    .eq("id", order);

  if (error) {
    console.log(error);
  }

  redirect("/protected/dashboard");
}
