"use client";

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const [passwordState, setPasswordState] = useState<boolean>(false);
  const searchParams = await props.searchParams;
  return (
    <div className="mx-auto mt-32 max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>
            Don't have an account?{" "}
            <Link
              className="font-medium text-foreground underline"
              href="/sign-up"
            >
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex min-w-64 flex-1 flex-col">
            <div className="flex flex-col gap-2 [&>input]:mb-3">
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="you@example.com" required />
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-xs text-foreground underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex items-center rounded-lg border">
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  required
                  className="border border-none"
                />
                <Eye className="mr-3 cursor-pointer text-muted-foreground transition hover:text-primary" />
              </div>
              <SubmitButton formAction={signInAction}>Sign in</SubmitButton>
              <FormMessage message={searchParams} />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
