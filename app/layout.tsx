import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/layout/navbar'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Across The Pond",
  description: "Generated by Nishant Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-slate-600'}>
      {/* <body className={'bg-[#021836]'}> */}
        <div className='min-h-screen w-full'>
          <Navbar />
          <main className='flex grow'>{children}</main>
        </div>

      </body>
    </html>
  );
}
