import { Inter, Space_Grotesk } from "next/font/google";
import "../global.css";
import { type ReactNode } from "react";

const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prashant Nath",
  description: "Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
