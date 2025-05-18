import { Car, ChevronRight, Shapes, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import TeslaModels from "./(tesla-components)/tesla-models";
import TeslaOrder from "./(tesla-components)/tesla-order";
import TeslaFavorite from "./(tesla-components)/tesla-favorite";

export default function ExploreTesla() {
  const portals = [
    {
      icon: <Car size={20} />,
      label: "Model",
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Order",
      count: 1,
    },
    {
      icon: <Star size={20} />,
      label: "Favorite",
      count: 5,
    },
    {
      icon: <Shapes size={20} />,
      label: "Campare",
    },
  ];

  return (
    <div className="px-3">
      <Link href={"/protected/dashboard"}>dashboard</Link>
      <div className="space-y-3">
        <p className="text-3xl font-semibold">Tesla</p>
        <div className="bg-skin divide-y rounded-lg border px-3 py-1">
          {portals.map((portal) => (
            <div
              key={portal.label}
              className="flex items-center justify-between"
            >
              <Drawer>
                <DrawerTrigger className="w-full p-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-x-3">
                      {portal.icon}
                      <p>{portal.label}</p>
                    </div>
                    <div className="flex items-center justify-center gap-x-2">
                      {portal.count ? (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary font-semibold">
                          <p className="text-xs">{portal.count} </p>
                        </div>
                      ) : (
                        ""
                      )}

                      <ChevronRight size={17} className="opacity-30" />
                    </div>
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                      This action cannot be undone.
                    </DrawerDescription>
                  </DrawerHeader>
                  {portal.label == "Model" ? (
                    <TeslaModels />
                  ) : portal.label == "Order" ? (
                    <TeslaOrder />
                  ) : portal.label == "Favorite" ? (
                    <TeslaFavorite />
                  ) : (
                    ""
                  )}
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
