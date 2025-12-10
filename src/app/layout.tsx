import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@feature/Home/components/header";
import "@app/public/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GL | Dev Blog",
  description:
    "A personal development blog featuring articles, tutorials, and insights on web development, programming best practices, and modern technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`max-w-5xl mx-auto ${inter.variable} flex flex-col min-h-screen`}
      >
        <NuqsAdapter>
          <Header />
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
