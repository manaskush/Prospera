import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prospera | Career Counselling and Guidance",
  description: "Choose the right career with Prospera, a Career Counselling & Guidance portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
       {children}</body>
    </html>
  );
}
