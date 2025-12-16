import dynamic from "next/dynamic";
import { Onest } from "next/font/google";

import "./globals.css";

const Header = dynamic(() => import("@/components/home/header"));
// const Footer = dinamic(() => import("@/components/home/footer"))

const geistOnest = Onest({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const styles = {
  body: ` ${geistOnest.variable} flex flex-col antialiased min-h-screen`,
  main: "flex-1 flex flex-col",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={styles.body}>
        <Header />
        <main className={styles.main}>{children}</main>
        {/** <Footer /> */}
      </body>
    </html>
  );
}
