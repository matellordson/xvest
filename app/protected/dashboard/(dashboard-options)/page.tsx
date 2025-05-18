"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const dashboards = [
  {
    value: "tesla",
    label: "Tesla",
  },
  {
    value: "spacex",
    label: "SpaceX",
  },
];

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="space-y-5">
      <div className="flex flex-col items-center justify-between gap-y-24 bg-neutral-900 py-5">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[8rem] justify-between"
            >
              {value
                ? dashboards.find((dashboard) => dashboard.value === value)
                    ?.label
                : "Tesla"}
              <ChevronsUpDown className="opacity-50" size={17} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  {dashboards.map((dashboard) => (
                    <CommandItem
                      key={dashboard.value}
                      value={dashboard.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {dashboard.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === dashboard.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="space-x-5">
          <Button>Explore Models</Button>
          <Button variant={"secondary"}>Compare Models</Button>
        </div>
      </div>
    </div>
  );
}
