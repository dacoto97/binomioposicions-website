import type { Metadata } from "next";
import type React from "react";
import "@/styles/tailwind.css";
import RootLayout from "@/components/RootLayout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    template: "%s - Binomi Oposicions",
    default: "Binomi - Oposicions bombers i policies",
  },
  description: "Oposicions bombers i policies",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body className="flex flex-col min-h-screen">
        <Header />
        <RootLayout>{children}</RootLayout>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-LN6CEV85M5" />
    </html>
  );
}
