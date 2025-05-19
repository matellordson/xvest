"use client";

import { useState } from "react";
import addOrder from "./add-order";
import addFavorite from "./add-favorite";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface propsType {
  model: string;
  price: number;
  plan1: number;
  plan2: number;
  plan3: number;
  plan4: number;
  plan5: number;
  user: string | undefined;
}

export default function ModelX({
  model,
  price,
  plan1,
  plan2,
  plan3,
  plan4,
  plan5,
  user,
}: propsType) {
  const [teslaModel, setTeslaModel] = useState<string>(model);
  const [currentPrice, setPrice] = useState<number>(price);
  const [planPrice, setPlanPrice] = useState<number>(0);
  const [plan, setPlan] = useState<number>(plan1);

  const [color, setColor] = useState<string>("stealth grey");
  const [wheels, setWheels] = useState<
    '20" cyberstream wheels' | '22" turbine wheels'
  >('20" cyberstream wheels');
  const [interior, setInterior] = useState<
    "all black" | "black and white" | "cream"
  >("all black");
  const [seat, setSeat] = useState<
    "five seat interior" | "six seat interior" | "seven seat interior"
  >("five seat interior");
  const [steering, setSteering] = useState<"steering wheel" | "yoke steering">(
    "steering wheel",
  );
  const [selfDrive, setSelfDrive] = useState<"yes" | "no">("no");

  const [priceFromColor, setPriceFromColor] = useState<number>(0);
  const [priceFromWheel, setPriceFromWheel] = useState<number>(0);
  const [priceFromInterior, setPriceFromInterior] = useState<number>(0);
  const [priceFromSeat, setPriceFromSeat] = useState<number>(0);
  const [priceFromSteering, setPriceFromSteering] = useState<number>(0);
  const [priceFromSelfDrive, setPriceFromSelfDrive] = useState<number>(0);

  const [colorChangePrice, setColorChangePrice] = useState<boolean>(false);
  const [wheelChangePrice, setWheelChangePrice] = useState<boolean>(false);
  const [interiorChangePrice, setInteriorChangePrice] =
    useState<boolean>(false);
  const [seatChangePrice, setSeatChangePrice] = useState<boolean>(false);
  const [steeringChangePrice, setSteeringChangePrice] =
    useState<boolean>(false);
  const [selfDriveChangePrice, setSelfDriveChangePrice] =
    useState<boolean>(false);

  const customPrice =
    priceFromColor +
    priceFromWheel +
    priceFromInterior +
    priceFromSeat +
    priceFromSteering +
    priceFromSelfDrive;

  function order() {
    const orderModel = teslaModel;
    const orderPrice = price + customPrice;
    const orderPlan = plan + customPrice;
    const orderColor = color;
    const orderWheels = wheels;
    const orderInterior = interior;
    const orderSeat = seat;
    const orderSteering = steering;
    const orderSelfDrive = selfDrive;
    const currentUser = user;
    addOrder({
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
    });
  }

  function favorite() {
    const favoriteModel = teslaModel;
    const favoritePrice = price + customPrice;
    const favoritePlan = plan + customPrice;
    const favoriteColor = color;
    const favoriteWheels = wheels;
    const favoriteInterior = interior;
    const favoriteSeat = seat;
    const favoriteSteering = steering;
    const favoriteSelfDrive = selfDrive;
    const currentUser = user;

    addFavorite({
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
    });
  }

  return (
    <div className="">
      <div className="flex h-screen w-full items-center justify-center">
        <Image
          src={"/model-order/model-x.png"}
          alt="model-x"
          width={2000}
          height={2000}
          priority
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute flex h-screen w-screen flex-col items-center justify-center">
          <div className="text-shadow h-[60%] w-full pt-5 text-center">
            <p className="pb-5 text-6xl">Model X</p>
          </div>
          <div
            className="top-[23rem] flex h-[40%] w-full items-center justify-between bg-black/30"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 3%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.3) 20%)",
              backdropFilter: "blur(1px) brightness(0.98)",
              WebkitBackdropFilter: "blur(2px) brightness(0.98)",
            }}
          >
            <div className="flex h-full w-full flex-col items-center justify-start gap-y-9">
              <div className="flex w-full items-center justify-between px-5">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">
                    329<span className="text-xs font-normal">mi</span>
                  </p>
                  <p className="text-sm">Range (EPA est.)</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">
                    149<span className="text-xs font-normal">mph</span>
                  </p>
                  <p className="text-sm">Top Speed</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">
                    3.8<span className="text-xs font-normal">sec</span>
                  </p>
                  <p className="text-sm">0-60 mph</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-y-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Invest Now</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Are you absolutely sure?</SheetTitle>
                      <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <p className="text-xs text-muted-foreground">
                  Specs displayed are Model X All-Wheel Drive values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
