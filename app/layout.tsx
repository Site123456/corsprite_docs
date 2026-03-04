import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Slidercomponent from "./slider"

export const metadata: Metadata = {
  title: "Nova Panel",
  description: "Modern dashboard shell",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased p-0 m-0">
        <Slidercomponent>
           {children}
        </Slidercomponent>
        
      </body>
    </html>
  );
}
