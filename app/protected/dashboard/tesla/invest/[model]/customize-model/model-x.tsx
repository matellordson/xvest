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
  const [plan1Price, setPlan1Price] = useState<number>(plan1);
  const [color, setColor] = useState<string>("stealth grey");
  const [priceFromColor, setPriceFromColor] = useState<number>(0);
  const [colorChangePrice, setColorChangePrice] = useState<boolean>(false);

  return (
    <div className="">
      <p className="font-semibold underline underline-offset-2 ">
        Choose investment plan
      </p>
      <div className="flex flex-col space-y-2 w-fit mb-2">
        <p>
          <span className="font-semibold">Current price:</span> $
          {price + priceFromColor}
        </p>
        <button className="border p-px">${plan1 + priceFromColor}/month</button>
        <button className="border p-px">${plan2 + priceFromColor}/month</button>
        <button className="border p-px">${plan3 + priceFromColor}/month</button>
        <button className="border p-px">${plan4 + priceFromColor}/month</button>
        <button className="border p-px">${plan5 + priceFromColor}/month</button>
      </div>
      <hr />
      <div className="">
        <p className="font-semibold underline underline-offset-2 ">Customize</p>
        <p className="border p-px w-fit">
          <span className="font-semibold">color:</span> {color}
        </p>
        <form action="" className="flex flex-col w-fit items-start">
          <button
            onClick={(e) => {
              e.preventDefault();
              setColor("stealth grey");
              if (colorChangePrice == true) {
                setColorChangePrice(false);
                setPriceFromColor(0);
                setPlan1Price(plan1);
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
        </form>
      </div>
    </div>
  );
}
