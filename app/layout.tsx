import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "xvest",
  description: "",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const user = createClient();

if (!user) {
  redirect("/sign-in");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">{children}</div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
