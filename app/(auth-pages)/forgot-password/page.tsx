import { forgotPasswordAction } from "@/app/actions";
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

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="mx-auto mt-32 max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Already have an account?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="mx-auto flex w-full min-w-64 max-w-64 flex-1 flex-col gap-2 text-foreground [&>input]:mb-6">
            <div className="flex flex-col gap-2 [&>input]:mb-3">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="you@example.com"
                type="email"
                required
              />
              <SubmitButton formAction={forgotPasswordAction}>
                Reset Password
              </SubmitButton>
              <FormMessage message={searchParams} />
            </div>
          </form>
          {/* <SmtpMessage /> */}
        </CardContent>
      </Card>
    </div>
  );
}
