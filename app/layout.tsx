import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "./components/Provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nurullah Gelgel | Software Engineer",
  description: "Nurullah Gelgel's personal portfolio website.",
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-[#050505] text-slate-200 antialiased selection:bg-teal-500/30 selection:text-teal-200 h-full flex flex-col min-h-screen`}>
        <Provider>

          <Navbar />
          <main className="flex-grow w-full mx-auto relative z-10">
            {children}
            <Analytics />
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}