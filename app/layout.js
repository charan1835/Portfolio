import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Charan Sai - Full Stack Developer | ML Enthusiast",
  description: "Self-taught full-stack developer and ML enthusiast crafting sleek, scalable web applications with Next.js, Tailwind, Clerk, and Hygraph.",
  keywords: "portfolio, developer, full-stack, react, nextjs, javascript, machine learning, charan sai, guntakal",
  author: "Charan Sai",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
