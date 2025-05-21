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
import TeslaModels from "./(tesla-components)/tesla-models";
import TeslaOrder from "./(tesla-components)/tesla-order";
import TeslaFavorite from "./(tesla-components)/tesla-favorite";
import OrderCount from "./(tesla-components)/(tesla-count)/order-count";
import FavoriteCount from "./(tesla-components)/(tesla-count)/favorite-count";

export default function ExploreTesla() {
  const portals = [
    {
      icon: <Car size={20} />,
      label: "Select Model",
    },
    {
      icon: <ShoppingCart size={20} />,
      label: "Investment",
      count: OrderCount(),
    },
    {
      icon: <Star size={20} />,
      label: "Watchlist",
      count: FavoriteCount(),
    },
  ];

  return (
    <div className="px-3">
      <Link href={"/protected/dashboard"}>dashboard</Link>
      <div className="space-y-3">
        <p className="text-3xl font-semibold">Tesla</p>
        <div className="divide-y rounded-lg border bg-skin px-3 py-1">
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
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200 font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                          <p className="text-xs">{portal.count} </p>
                        </div>
                      ) : (
                        ""
                      )}

                      <ChevronRight size={17} className="opacity-30" />
                    </div>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="pb-5">
                  <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                  </DrawerHeader>
                  {portal.label == "Select Model" ? (
                    <TeslaModels />
                  ) : portal.label == "Investment" ? (
                    <TeslaOrder />
                  ) : portal.label == "Watchlist" ? (
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
