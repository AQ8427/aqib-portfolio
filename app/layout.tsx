import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqib-portfolio-three.vercel.app"),
  title: "Aqib Shahzad — Product Designer",
  description:
    "Product Designer specializing in AI-powered healthcare products, enterprise SaaS, and complex digital experiences.",
  openGraph: {
    title: "Aqib Shahzad — Product Designer",
    description:
      "Product Designer specializing in AI-powered healthcare products, enterprise SaaS, and complex digital experiences.",
    type: "website",
    url: "https://aqib-portfolio-three.vercel.app/",
    images: [
      {
        url: "/images/aqib-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Aqib Shahzad — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqib Shahzad — Product Designer",
    description:
      "Product Designer specializing in AI-powered healthcare products, enterprise SaaS, and complex digital experiences.",
    images: ["/images/aqib-hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}
  <BackToTop />
</body>

    </html>
  );
}
