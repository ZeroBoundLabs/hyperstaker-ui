import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Rainbow from "./rainbow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyperstaker",
  description: "Your Insight, Everyone's Reward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Rainbow>{children}</Rainbow>
      </body>
    </html>
  );
}
