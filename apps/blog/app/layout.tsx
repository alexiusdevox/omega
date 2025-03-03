import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../components/scrollToTop";

// const orbitron = localFont({
//   src: "./fonts/VariableFont_wght.ttf",
//   variable: "--font-orbitron",
// });

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${orbitron.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>

  );
}
