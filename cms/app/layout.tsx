import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from '../component/header';
import Footer from '../component/footer';
import Navbar from '../component/navbar';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warmaskin Coffee",
  description: "Nikmati kopi terbaik dari Warmaskin Coffee Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-gray-50`}>
        <Header />
        <Navbar />
        <main className="flex-grow">
          <section>{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
