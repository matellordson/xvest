"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  user_email: string | null;
  model: string;
  plan: number;
  price: number;
  paid: number;
  balance: number;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "user_email",
    header: "Email",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "plan",
    header: "Plan",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "paid",
    header: "Paid",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
];
