import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user?.id != process.env.ADMIN_ID) {
    return redirect("/protected/dashboard/portfolio");
  }
  return <div className="">{children}</div>;
}
