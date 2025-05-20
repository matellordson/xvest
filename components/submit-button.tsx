"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {};

export function SubmitButton({ children, ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? (
        <p className="flex items-center justify-center gap-1">
          <Loader size={18} className="animate-spin" />
          {children}
        </p>
      ) : (
        children
      )}
    </Button>
  );
}
