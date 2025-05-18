"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

interface favoriteType {
  favoriteModel: string;
  favoritePrice: number;
  favoritePlan: number;
  favoriteColor: string;
  favoriteWheels: string;
  favoriteInterior: string;
  favoriteSeat: string;
  favoriteSteering: string;
  favoriteSelfDrive: string;
  currentUser: any;
}

export default async function addFavorite({
  favoriteModel,
  favoritePrice,
  favoritePlan,
  favoriteColor,
  favoriteWheels,
  favoriteInterior,
  favoriteSeat,
  favoriteSteering,
  favoriteSelfDrive,
  currentUser,
}: favoriteType) {
  const supabase = await createClient();

  const { error } = await supabase.from("tesla favorite").insert({
    user: currentUser,
    model: favoriteModel,
    price: favoritePrice,
    plan: favoritePlan,
    color: favoriteColor,
    wheels: favoriteWheels,
    interior: favoriteInterior,
    seat: favoriteSeat,
    steering: favoriteSteering,
    self_drive: favoriteSelfDrive,
  });

  redirect("/protected/dashboard");

  if (error) {
    console.log(error);
  }
}
