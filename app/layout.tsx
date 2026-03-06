import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Slidercomponent from "./slider";

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Site123456/CORSPRITE"),

  title: {
    default: "Corsprite",
    template: "%s | Corsprite"
  },

  description:
    "Corsprite is a general-purpose multimodal AI assistant that can render interactive characters on devices and interact using voice, text, images, videos, and files. The platform includes modular tools such as Corsprite VD for engineering and design, text-to-speech, speech-to-text, image understanding, and AI file analysis.",

  keywords: [
    "Corsprite",
    "AI assistant",
    "multimodal AI",
    "voice AI assistant",
    "AI character assistant",
    "text to speech AI",
    "speech to text AI",
    "image to text AI",
    "AI image description",
    "AI video analysis",
    "AI file analysis",
    "AI engineering tools",
    "CAD AI",
    "PCB design AI",
    "Corsprite VD",
    "interactive AI character"
  ],

  alternates: {
    canonical: "https://github.com/Site123456/CORSPRITE"
  },

  authors: [{ name: "Corsprite" }],
  creator: "Corsprite",
  publisher: "Corsprite",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  openGraph: {
    title: "Corsprite – Multimodal AI Assistant Platform",
    description:
      "Interact with AI through voice, text, images, videos, and files. Corsprite is a modular AI platform with tools like Corsprite VD, speech-to-text, text-to-speech, and AI visual understanding.",
    url: "https://corsprite.com",
    siteName: "Corsprite",
    type: "website",
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Corsprite – Multimodal AI Assistant",
    description:
      "Corsprite is an AI platform capable of voice, text, image, video, and file interaction with modular tools like Corsprite VD."
  },

  category: "technology"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased p-0 m-0">
        <Slidercomponent>
          <main>{children}</main>
        </Slidercomponent>
      </body>
    </html>
  );
}