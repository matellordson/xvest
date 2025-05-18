"use client";

import { useState } from "react";

interface propsType {
  price: number;
  plan1: number;
  plan2: number;
  plan3: number;
  plan4: number;
  plan5: number;
}

export default function ModelX({
  price,
  plan1,
  plan2,
  plan3,
  plan4,
  plan5,
}: propsType) {
  const [currentPrice, setPrice] = useState<number>(price);
  const [planPrice, setPlanPrice] = useState<number>(0);

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
    "steering wheel"
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
    const orderPrice = price + customPrice;
    const orderPlan = "not selected";
    const orderColor = color;
    const orderWheels = wheels;
    const orderInterior = interior;
    const orderSeat = seat;
    const orderSteering = steering;
    const orderSelfDrive = selfDrive;

    console.log(
      orderPrice,
      orderPlan,
      orderColor,
      orderWheels,
      orderInterior,
      orderSeat,
      orderSteering,
      orderSelfDrive
    );
  }

  return (
    <div className="">
      <p className="font-semibold underline underline-offset-2 ">
        Choose investment plan
      </p>
      <div className="flex flex-col space-y-2 w-fit mb-2">
        <p>
          <span className="font-semibold">Current price:</span> $
          {price + customPrice}
        </p>
        <button className="border p-px">${plan1 + customPrice}/month</button>
        <button className="border p-px">${plan2 + customPrice}/month</button>
        <button className="border p-px">${plan3 + customPrice}/month</button>
        <button className="border p-px">${plan4 + customPrice}/month</button>
        <button className="border p-px">${plan5 + customPrice}/month</button>
      </div>
      <hr />
      <div className="">
        <p className="font-semibold underline underline-offset-2 ">Customize</p>
        <form action="" className="flex flex-col w-fit items-start space-y-3">
          {/* COLOR */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">color:</span> {color}
            </p>
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
            >
              stealth grey
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
            >
              pearl white multi-coat
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
            >
              deep blue metallic
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
            >
              solid black
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
            >
              ultra red
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
            >
              luna silver
            </button>
          </div>

          {/* WHEEL */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">wheels:</span> {wheels}
            </p>
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
            >
              20" cyberstream wheels
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
            >
              22" turbine wheels
            </button>
          </div>

          {/* INTERIOR COLOR */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">interior color:</span> {interior}
            </p>
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
            >
              all black
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
            >
              black and white
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
            >
              cream
            </button>
          </div>

          {/* SEAT */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">seat interior:</span> {seat}
            </p>
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
            >
              five seat interior
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
            >
              six seat interior
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
            >
              seven seat interior
            </button>
          </div>

          {/* STEERING WHEEL */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">steering wheel:</span> {steering}
            </p>
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
            >
              steering wheel
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
            >
              york steering
            </button>
          </div>

          {/* SELF DRIVE */}
          <div className="flex flex-col items-start">
            <p className="border p-px w-fit">
              <span className="font-semibold">self drive (supervised):</span>{" "}
              {selfDrive}
            </p>
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
            >
              no
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelfDrive("yes");
                if (selfDriveChangePrice == false) {
                  setSelfDriveChangePrice(true);
                  setPriceFromSelfDrive(800);
                }
              }}
            >
              yes
            </button>
          </div>
        </form>
        <button onClick={order} className="my-5 border p-px font-bold">
          order
        </button>
      </div>
    </div>
  );
}
