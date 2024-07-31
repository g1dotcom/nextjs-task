import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Task",
  description: "NextJS Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  );
}
