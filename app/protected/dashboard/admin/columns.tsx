"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";
import adminUpdate from "./update-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  email: string | null;
  model: string;
  plan: number;
  price: number;
  paid: number;
  id: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "model",
    header: "Model",
    cell: ({ row }) => {
      const input: string = row.getValue("model");
      const output = input.replace(/-/g, " ");
      return <div className="text-right font-medium capitalize">{output}</div>;
    },
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("plan"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "paid",
    header: "Paid",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("paid"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size={"sm"}>
              Update
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update paid value</DialogTitle>
              <DialogDescription>
                This action will change client paid value for the model.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-2">
              <Label>
                <span className="text-muted-foreground">Current payment: </span>
                $
                {order.paid.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </Label>
              <Input
                required
                type="text"
                defaultValue={order.paid}
                name="paid"
              />
              <SubmitButton formAction={adminUpdate.bind(null, order.id)}>
                Submit
              </SubmitButton>
            </form>
          </DialogContent>
        </Dialog>

        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(order.id)}
        //     >
        //       Copy payment ID
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
