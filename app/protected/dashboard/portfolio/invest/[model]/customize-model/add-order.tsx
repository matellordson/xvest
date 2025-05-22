"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface orderType {
  orderModel: string;
  orderPrice: number;
  orderPlan: number;
  orderColor: string;
  orderWheels: string;
  orderInterior: string;
  orderSeat: string;
  orderSteering: string;
  orderSelfDrive: string;
  currentUser: any;
  userEmailAddress: string | undefined;
}

export default async function addOrder({
  orderModel,
  orderPrice,
  orderPlan,
  orderColor,
  orderWheels,
  orderInterior,
  orderSeat,
  orderSteering,
  orderSelfDrive,
  currentUser,
  userEmailAddress,
}: orderType) {
  const supabase = await createClient();

  const { error } = await supabase.from("tesla order").insert({
    user: currentUser,
    model: orderModel,
    price: orderPrice,
    plan: orderPlan,
    color: orderColor,
    wheels: orderWheels,
    interior: orderInterior,
    seat: orderSeat,
    steering: orderSteering,
    self_drive: orderSelfDrive,
    user_email: userEmailAddress,
  });

  redirect("/protected/dashboard/portfolio");
}
