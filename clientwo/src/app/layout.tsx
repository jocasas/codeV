"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const meta: Metadata = {
  title: "CodeV",
  description: "CodeV",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/login", "/register", "/testing"];
  const shouldRenderNavbar = !noNavbarRoutes.includes(pathname);

  return (
    <html lang="en" className="bg-neutral-900">
      <head>
        {/* Include any head elements like meta tags or stylesheets here */}
      </head>

      <body className={`h-screen ${roboto.className}`}>
        <header>{shouldRenderNavbar && <Navbar />}</header>
        {children}
      </body>
    </html>
  );
}
