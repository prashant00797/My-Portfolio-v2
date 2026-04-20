import { Inter, Space_Grotesk } from "next/font/google";
import "../global.css";
import { type ReactNode } from "react";
import Script from "next/script";
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
      <body className="min-h-full">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HZ5W9ELQBV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HZ5W9ELQBV');
  `}
        </Script>
      </body>
    </html>
  );
}
