import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-32 max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            {" "}
            Already have an account?{" "}
            <Link
              className="font-medium text-primary underline"
              href="/sign-in"
            >
              Sign in
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="mx-auto flex min-w-64 max-w-64 flex-col">
            <div className="flex flex-col gap-2 [&>input]:mb-3">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="you@example.com"
                type="email"
                required
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                minLength={6}
                required
              />
              <SubmitButton formAction={signUpAction}>Sign up</SubmitButton>
              <FormMessage message={searchParams} />
            </div>
          </form>
          {/* <SmtpMessage /> */}
        </CardContent>
      </Card>
    </div>
  );
}
