import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer'ı import edin
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nurullah Gelgel",
  description: "Nurullah Gelgel's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-300 text-gray-900 dark:bg-customDark dark:text-gray-100 h-full selection:bg-gray-50 dark:selection:bg-blue-800 flex flex-col min-h-screen`}>
        <Provider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
            {children}
          </main>
          <Footer /> {/* Footer'ı buraya ekleyin */}
        </Provider>
      </body>
    </html>
  );
}

