import {
  Car,
  ChevronLeft,
  ChevronRight,
  Shapes,
  ShoppingCart,
  Star,
} from "lucide-react";
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 256 256"
          className="fill-primary"
        >
          <path
            d="M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112H224Z"
            opacity="0.2"
          ></path>
          <path d="M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z"></path>
        </svg>
      ),
      label: "Select Model",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 256 256"
          className="fill-primary"
        >
          <path
            d="M240,132c0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44h0C146.76,156.85,176,142,176,124V96.72h0C212.52,100.06,240,114.58,240,132ZM176,84c0-19.88-35.82-36-80-36S16,64.12,16,84s35.82,36,80,36S176,103.88,176,84Z"
            opacity="0.2"
          ></path>
          <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
        </svg>
      ),
      label: "Investment",
      count: OrderCount(),
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 256 256"
          className="fill-primary"
        >
          <path
            d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z"
            opacity="0.2"
          ></path>
          <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
        </svg>
      ),
      label: "Watchlist",
      count: FavoriteCount(),
    },
  ];

  return (
    <div className="px-3">
      <Link
        href={"/protected/dashboard"}
        className="group flex w-fit justify-center rounded-lg px-1 py-1 pr-2 font-semibold tracking-wide backdrop-blur-md hover:bg-muted"
      >
        <ChevronLeft size={20} className="relative group-hover:right-1" />
        <p className="text-sm">Dashboard</p>
      </Link>
      <div className="space-y-3">
        <p className="pt-5 text-3xl font-semibold">Tesla</p>
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
