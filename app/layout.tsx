import type { Metadata } from "next";
import "./globals.css";
import { Room } from "./Room";

export const metadata: Metadata = {
  title: "Gojo CMS",
  description: "A minimalistic figma like app using Fabric.js and liveBlocks for realtime collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
