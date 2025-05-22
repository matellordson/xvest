import { SubmitButton } from "@/components/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import onBoardingAction from "./action";

export default function Onbording() {
  return (
    <div className="mx-auto mt-10 max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Set Up Your Profile</CardTitle>
          <CardDescription>
            Just a few details to complete your signup smoothly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="first_name">First Name</Label>
                <Input type="text" name="first_name" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="last_name">Last Name</Label>
                <Input type="text" name="last_name" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="number">Mobile Phone Number</Label>
                <Input type="number" name="number" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="zip">Delivery Zip</Label>
                <Input type="text" name="zip" required />
              </div>
            </div>
            <SubmitButton formAction={onBoardingAction} className="w-full">
              Submit
            </SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
