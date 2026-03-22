import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const cursiveFont = Dancing_Script({
  variable: "--font-cursive",
  subsets: ["latin"],
});

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
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${cursiveFont.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Toaster position="top-center" toastOptions={{
          style: {
            background: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #334155'
          },
        }} />
        {children}
      </body>
    </html>
  );
}
