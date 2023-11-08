'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../Components/Navbar/Navbar";
import { Roboto } from "next/font/google";
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  // Lista de rutas donde NO se mostrará el Navbar
  const noNavbarRoutes = ["/login", "/register"];
  const shouldRenderNavbar = !noNavbarRoutes.includes(pathname);

  return (
    <html lang="en" className=" bg-neutral-900">
      <body className={` h-screen ${roboto.className}`}>
        <header>
          {shouldRenderNavbar ? <Navbar /> : null}
        </header>
        {children}
      </body>
    </html>
  );
}
