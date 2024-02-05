import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const work_Sans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400','600','700']
});



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
      <body className={work_Sans.className}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
