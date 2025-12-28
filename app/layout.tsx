import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../public/webfonts/Clashdisplay/ClashDisplay-Light.woff2",
  variable: "--font-clash",
  weight: "300",
});

const satoshi = localFont({
  src: "../public/webfonts/Satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Donezo Dashboard",
  description: "Project Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${satoshi.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
