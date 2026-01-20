import type { Metadata } from "next";
import { Syne, Syne_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindMe | Md Hasib Askari",
  description: "Personal portfolio website of Md Hasib Askari, a passionate software engineer (full stack).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${syneMono.variable}`} suppressHydrationWarning>
      <body
        className='antialiased'
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
