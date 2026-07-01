import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PicJob - African Freelance & Digital Asset Marketplace",
  description: "PicJob connects businesses with Africa's top freelance talent. Post a gig, hire with confidence, and pay securely through built-in escrow.",
  openGraph: {
    title: "PicJob - African Freelance & Digital Asset Marketplace",
    description: "PicJob connects businesses with Africa's top freelance talent. Post a gig, hire with confidence, and pay securely through built-in escrow.",
    url: "https://thejob.vercel.app",
    siteName: "PicJob",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "PicJob Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
