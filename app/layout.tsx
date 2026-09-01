import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Music Finder",
  description: "Find the best live music near you — from hidden gems to stadium shows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
