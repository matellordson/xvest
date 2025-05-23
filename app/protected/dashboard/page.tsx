import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import AdminPage from "./admin/page";

export default async function dashbaordPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="">
      {user.id == process.env.ADMIN_ID ? (
        <AdminPage />
      ) : (
        <Link
          href={"/protected/dashboard/portfolio"}
          className="underline underline-offset-2"
        >
          Tesla
        </Link>
      )}
    </div>
  );
}
