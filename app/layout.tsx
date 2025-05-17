import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const metadata = {
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
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
