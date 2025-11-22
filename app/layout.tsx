// FIX: Import React to resolve "Cannot find namespace 'React'" error for React.ReactNode type.
import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from 'next/font/local'
import ClientLayout from "../components/ClientLayout";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const manRope = localFont({
  src: [
    {
      path: './fonts/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/medium.woff2',
      weight: '400',
      style: 'medium',
    },
    {
      path: './fonts/semibold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/bold.woff2',
      weight: '400',
      style: 'bold',
    }
  ],
  variable: "--font-manrope", // optional
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sekitar - Cari Kost Lebih Mudah",
  description: "A modern platform to find rental properties and boarding houses (Kost) with a clean, responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          /* Hide scrollbar for chrome/safari/opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}</style>
      </head>
      <body className={manRope.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
