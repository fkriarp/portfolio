import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DATA } from "@/lib/constants";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${DATA.fullName} — ${DATA.role}`,
    template: `%s | ${DATA.fullName}`,
  },
  description: DATA.description,
  keywords: ["Full-Stack Developer", "Next.js", "React", "Jakarta", DATA.fullName],
  authors: [{ name: DATA.fullName }],
  creator: DATA.fullName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://fidev.vercel.app/",
    title: `${DATA.fullName} — ${DATA.role}`,
    description: DATA.description,
    siteName: DATA.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.fullName} — ${DATA.role}`,
    description: DATA.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fidev.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
