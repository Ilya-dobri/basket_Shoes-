import type { Metadata } from "next";
import "./globals.css";
;

export const metadata: Metadata = {
  title: "basket shop",
  description: "basket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
