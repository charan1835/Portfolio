import { Dancing_Script, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import FixedSignature from "./components/FixedSignature";

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
  title: {
    default: "Charan Sai | Developer Portfolio",
    template: "%s | Charan Sai"
  },
  description: "Charan Sai - Full-stack developer building AI-powered apps and ML solutions.",
  keywords: ["Charan Sai", "Charan Sai Portfolio", "Full Stack Developer", "Machine Learning", "Next.js", "AI-powered apps"],
  authors: [{ name: "Charan Sai" }],
  creator: "Charan Sai",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.charansai.app",
    title: "Charan Sai | Developer Portfolio",
    description: "Charan Sai - Full-stack developer building AI-powered apps and ML solutions.",
    siteName: "Charan Sai Portfolio",
    images: [
      {
        url: "/pic.png", // Using existing profile pic as OG image for now
        width: 1200,
        height: 630,
        alt: "Charan Sai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charan Sai | Developer Portfolio",
    description: "Charan Sai - Full-stack developer building AI-powered apps and ML solutions.",
    images: ["/pic.png"],
  },
  alternates: {
    canonical: "https://www.charansai.app",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Charan Sai",
    "url": "https://www.charansai.app",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://github.com/charan1835",
      "https://www.linkedin.com/in/charan-sai-chimbili-abb62828b/"
    ]
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <FixedSignature />
      </body>
    </html>
  );
}
