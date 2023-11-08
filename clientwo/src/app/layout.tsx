import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../Components/Navbar/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-neutral-900">
      <body className={` h-screen ${roboto.className}`}>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
