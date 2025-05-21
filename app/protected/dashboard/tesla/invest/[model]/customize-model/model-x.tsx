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
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft, MoveLeft, Star } from "lucide-react";
import Link from "next/link";
import { SubmitButton } from "@/components/submit-button";

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

  const displayPrice = price + customPrice;
  const displayPlan = plan + customPrice;
  const displayPlan2 = plan2 + customPrice;
  const displayPlan1 = plan1 + customPrice;
  const displayPlan3 = plan3 + customPrice;
  const displayPlan4 = plan4 + customPrice;
  const displayPlan5 = plan5 + customPrice;

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
          <div className="text-shadow h-[60%] w-full pt-2 text-center">
            <Link
              href={"/protected/dashboard/tesla"}
              className="group ml-3 flex w-fit justify-center rounded-lg px-1 py-1 pr-2 font-semibold tracking-wide backdrop-blur-md"
            >
              <ChevronLeft size={20} className="relative group-hover:right-1" />
              <p className="text-sm">Dashboard</p>
            </Link>
            <p className="text-shadow pb-5 pt-7 text-6xl font-semibold">
              Model X
            </p>
          </div>
          <div
            className="top-[23rem] flex h-[40%] w-full items-center justify-between bg-black/40"
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
                <div className="flex gap-x-3">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button>Invest Now</Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-hidden">
                      <SheetHeader className="py-3">
                        {/* checkout */}
                        <div className="flex h-[4rem] items-center justify-between border-b border-dashed">
                          <div className="">
                            <SheetTitle className="text-2xl font-semibold tracking-wide">
                              $
                              {displayPrice.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })}
                            </SheetTitle>
                            <SheetDescription className="text-sm tracking-wide">
                              $
                              {displayPlan.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })}
                              <span className="text-xs">/mo</span>
                            </SheetDescription>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <form action="">
                              <SubmitButton
                                formAction={order}
                                className="tracking-wider"
                              >
                                Invest
                              </SubmitButton>
                            </form>
                          </div>
                        </div>
                      </SheetHeader>
                      {/* model details */}
                      <div className="max-h-[80vh] min-h-[90vh] space-y-8 overflow-y-scroll pb-36">
                        {/* investment plan */}
                        <div>
                          <p className="mx-auto mb-2 w-fit rounded-lg bg-muted px-3 py-1 text-center">
                            Monthly Plan
                          </p>
                          <div className="space-y-2">
                            <button
                              onClick={() => setPlan(plan1)}
                              className={`flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90 ${plan == plan1 ? "border-primary" : "border"}`}
                            >
                              <p>
                                6<span className="text-sm">/mo</span>
                              </p>
                              <p className="font-semibold tracking-wide"></p>$
                              {displayPlan1.toLocaleString("en-US", {
                                maximumFractionDigits: 2,
                              })}
                            </button>
                            <button
                              onClick={() => setPlan(plan2)}
                              className={`flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90 ${plan == plan2 ? "border-primary" : "border"}`}
                            >
                              <p>
                                12<span className="text-sm">/mo</span>
                              </p>
                              <p className="font-semibold tracking-wide">
                                $
                                {displayPlan2.toLocaleString("en-US", {
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                            </button>
                            <button
                              onClick={() => setPlan(plan3)}
                              className={`flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90 ${plan == plan3 ? "border-primary" : "border"}`}
                            >
                              <p>
                                24<span className="text-sm">/mo</span>
                              </p>
                              <p className="font-semibold tracking-wide">
                                $
                                {displayPlan3.toLocaleString("en-US", {
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                            </button>
                            <button
                              onClick={() => setPlan(plan4)}
                              className={`flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90 ${plan == plan4 ? "border-primary" : "border"}`}
                            >
                              <p>
                                36<span className="text-sm">/mo</span>
                              </p>
                              <p className="font-semibold tracking-wide">
                                $
                                {displayPlan4.toLocaleString("en-US", {
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                            </button>
                            <button
                              onClick={() => setPlan(plan5)}
                              className={`flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90 ${plan == plan5 ? "border-primary" : "border"}`}
                            >
                              <p>
                                48<span className="text-sm">/mo</span>
                              </p>
                              <p className="font-semibold tracking-wide">
                                $
                                {displayPlan5.toLocaleString("en-US", {
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                            </button>
                          </div>
                        </div>
                        <p className="mx-auto w-fit rounded-lg bg-muted px-3 py-1 text-center">
                          Model Specs
                        </p>
                        {/* color */}
                        <div>
                          <div className="flex flex-col justify-between space-x-2">
                            <p className="pb-2 text-center font-semibold capitalize">
                              {color}
                            </p>
                            <div className="flex justify-between space-x-2">
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("stealth grey");
                                  if (colorChangePrice == true) {
                                    setColorChangePrice(false);
                                    setPriceFromColor(0);
                                    setPlanPrice(plan1);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "stealth grey" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/grey.png"}
                                  alt="grey"
                                  height={40}
                                  width={40}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("pearl white multi-coat");
                                  if (colorChangePrice == false) {
                                    setColorChangePrice(true);
                                    setPriceFromColor(100);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "pearl white multi-coat" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/pearl.png"}
                                  alt="pearl"
                                  height={40}
                                  width={40}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("deep blue metallic");
                                  if (colorChangePrice == false) {
                                    setColorChangePrice(true);
                                    setPriceFromColor(100);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "deep blue metallic" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/blue.png"}
                                  alt="blue"
                                  height={40}
                                  width={40}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("solid black");
                                  if (colorChangePrice == false) {
                                    setColorChangePrice(true);
                                    setPriceFromColor(100);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "solid black" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/black.png"}
                                  alt="black"
                                  height={40}
                                  width={40}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("ultra red");
                                  if (colorChangePrice == false) {
                                    setColorChangePrice(true);
                                    setPriceFromColor(100);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "ultra red" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/red.png"}
                                  alt="red"
                                  height={40}
                                  width={40}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  setColor("luna silver");
                                  if (colorChangePrice == false) {
                                    setColorChangePrice(true);
                                    setPriceFromColor(100);
                                  }
                                }}
                                className={`flex items-center justify-center rounded-full p-1 ${color == "luna silver" ? "border border-primary" : ""}`}
                              >
                                <Image
                                  src={"/model-colors/silver.png"}
                                  alt="silver"
                                  height={40}
                                  width={40}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* wheel */}
                        <div className="">
                          <p className="pb-2 text-center font-semibold capitalize">
                            {wheels}
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setWheels('20" cyberstream wheels');
                                if (wheelChangePrice == true) {
                                  setWheelChangePrice(false);
                                  setPriceFromWheel(0);
                                  setPlanPrice(plan1);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${wheels == '20" cyberstream wheels' ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-wheels/model-x/20.png"}
                                alt="wheel"
                                height={40}
                                width={40}
                              />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setWheels('22" turbine wheels');
                                if (wheelChangePrice == false) {
                                  setWheelChangePrice(true);
                                  setPriceFromWheel(100);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${wheels == '22" turbine wheels' ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-wheels/model-x/22.png"}
                                alt="wheel"
                                height={40}
                                width={40}
                              />
                            </button>
                          </div>
                        </div>
                        {/* interior */}
                        <div className="">
                          <p className="text-center text-sm text-muted-foreground">
                            Interior Color
                          </p>
                          <p className="pb-2 text-center font-semibold capitalize">
                            {interior}
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setInterior("all black");
                                if (interiorChangePrice == true) {
                                  setInteriorChangePrice(false);
                                  setPriceFromInterior(0);
                                  setPlanPrice(plan1);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${interior == "all black" ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-interior/model-x/black.png"}
                                alt="black"
                                height={40}
                                width={40}
                              />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setInterior("black and white");
                                if (interiorChangePrice == false) {
                                  setInteriorChangePrice(true);
                                  setPriceFromInterior(100);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${interior == "black and white" ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-interior/model-x/bandw.png"}
                                alt="black and white"
                                height={40}
                                width={40}
                              />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setInterior("cream");
                                if (interiorChangePrice == false) {
                                  setInteriorChangePrice(true);
                                  setPriceFromInterior(100);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${interior == "cream" ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-interior/model-x/bandw.png"}
                                alt="cream"
                                height={40}
                                width={40}
                              />
                            </button>
                          </div>
                        </div>
                        {/* seat */}
                        <div className="">
                          <p className="pb-2 text-center font-semibold capitalize">
                            {seat}
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSeat("five seat interior");
                                if (seatChangePrice == true) {
                                  setSeatChangePrice(false);
                                  setPriceFromSeat(0);
                                  setPlanPrice(plan1);
                                }
                              }}
                              className={`h-10 w-10 rounded-full border text-lg font-semibold text-muted-foreground ${seat == "five seat interior" ? "border-primary text-primary" : ""}`}
                            >
                              5
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSeat("six seat interior");
                                if (seatChangePrice == false) {
                                  setSeatChangePrice(true);
                                  setPriceFromSeat(100);
                                }
                              }}
                              className={`h-10 w-10 rounded-full border text-lg font-semibold text-muted-foreground ${seat == "six seat interior" ? "border-primary text-primary" : ""}`}
                            >
                              6
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSeat("seven seat interior");
                                if (seatChangePrice == false) {
                                  setSeatChangePrice(true);
                                  setPriceFromSeat(100);
                                }
                              }}
                              className={`h-10 w-10 rounded-full border text-lg font-semibold text-muted-foreground ${seat == "seven seat interior" ? "border-primary text-primary" : ""}`}
                            >
                              7
                            </button>
                          </div>
                        </div>
                        {/* steering */}
                        <div className="">
                          <p className="pb-2 text-center font-semibold capitalize">
                            {steering}
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSteering("steering wheel");
                                if (steeringChangePrice == true) {
                                  setSteeringChangePrice(false);
                                  setPriceFromSteering(0);
                                  setPlanPrice(plan1);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${steering == "steering wheel" ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-steering/model-x/steering.png"}
                                alt="steering"
                                height={40}
                                width={40}
                              />
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSteering("yoke steering");
                                if (steeringChangePrice == false) {
                                  setSteeringChangePrice(true);
                                  setPriceFromSteering(100);
                                }
                              }}
                              className={`flex items-center justify-center rounded-full p-1 ${steering == "yoke steering" ? "border border-primary" : ""}`}
                            >
                              <Image
                                src={"/model-steering/model-x/york.png"}
                                alt="steering"
                                height={40}
                                width={40}
                              />
                            </button>
                          </div>
                        </div>
                        {/* self drive */}
                        <div className="">
                          <p className="text-center font-semibold capitalize">
                            full self-driving (supervised)
                          </p>
                          <p className="pb-2 text-center text-xs text-muted-foreground">
                            Your car will be able to drive itself almost
                            anywhere with minimal driver intervention
                          </p>
                          {selfDrive == "no" ? (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSelfDrive("yes");
                                if (selfDriveChangePrice == false) {
                                  setSelfDriveChangePrice(true);
                                  setPriceFromSelfDrive(8000);
                                }
                              }}
                              className="flex h-10 w-full items-center justify-between rounded-lg border bg-skin px-3 hover:opacity-90"
                            >
                              <p className="capitalize">full self-driving</p>
                              <p className="font-semibold">$8,000</p>
                            </button>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSelfDrive("no");
                                if (selfDriveChangePrice == true) {
                                  setSelfDriveChangePrice(false);
                                  setPriceFromSelfDrive(0);
                                  setPlanPrice(plan1);
                                }
                              }}
                              className="flex h-10 w-full items-center justify-between rounded-lg border border-primary bg-skin px-3 hover:opacity-90"
                            >
                              <p className="capitalize">full self-driving</p>
                              <p className="font-semibold">$8,000</p>
                            </button>
                          )}
                        </div>
                        <form>
                          <SubmitButton
                            formAction={favorite}
                            className="w-full"
                            variant={"outline"}
                            size={"icon"}
                          >
                            Add to watchlist
                          </SubmitButton>
                        </form>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Button asChild variant={"secondary"} className="shadow-xl">
                    <a target="_blank" href="https://www.tesla.com/modelx">
                      Lean More
                    </a>
                  </Button>
                </div>
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
