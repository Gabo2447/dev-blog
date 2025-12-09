// >> Types <<
import { LayoutProps } from "@app/types/layout";
import type { Metadata } from "next";

// >> Components <<
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Inter from "@app/fonts/Inter";
import Header from "@app/components/header";
// import Footer from "@app/components/footer";

// >> Styles <<
import "@app/styles/global.css";

export const metadata: Metadata = {
  title: "GL | Dev Blog",
  description:
    "A personal development blog featuring articles, tutorials, and insights on web development, programming best practices, and modern technologies.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`max-w-5xl mx-auto ${Inter.className}`}>
        <NuqsAdapter>
          <Header />
          <main className="w-full mx-auto p-4 sm:p-8 mb-16 grid gap-16">
            {children}
          </main>
        </NuqsAdapter>
      </body>
    </html>
  );
}
