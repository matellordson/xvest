"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function onBoardingAction(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const currentUser = user!.id as string;
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const number = formData.get("number");
  const zip = formData.get("zip");

  const { error } = await supabase.from("tesla_profile").insert({
    user_id: currentUser,
    first_name: firstName,
    last_name: lastName,
    email: email,
    number: number,
    zip: zip,
  });

  if (error) {
    console.log(error);
  }

  redirect("/protected/dashboard");
}
