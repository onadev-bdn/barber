import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { setDefaultOptions } from "date-fns";
import { es } from "date-fns/locale";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

import Footer from "./footer";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barber Shop",
  description: "The best barber shop in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  setDefaultOptions({ locale: es });
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
