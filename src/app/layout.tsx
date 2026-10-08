import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Harshithkumar T | Full Stack Developer & Software Engineer",
  description: "Portfolio of Harshithkumar T, a BCA graduate and aspiring Full Stack Developer & Software Engineer building full-stack applications, AI-powered systems, and modern web solutions.",
  openGraph: {
    title: "Harshithkumar T | Full Stack Developer & Software Engineer",
    description: "Portfolio of Harshithkumar T, a BCA graduate and aspiring Full Stack Developer & Software Engineer building full-stack applications, AI-powered systems, and modern web solutions.",
    type: "website",
    url: "https://harshithkumar.dev", // Placeholder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-black antialiased text-white">
        {children}
      </body>
    </html>
  );
}
