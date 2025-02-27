import type { Metadata } from "next";
import { K2D, Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from '@/lib/utils'
import MainNavbar from '@/components/main-navbar'

const k2d = K2D({ weight: "400", subsets: ["latin", "thai"] });
const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "pingpong-pnw's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background dark", inter.className)}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
