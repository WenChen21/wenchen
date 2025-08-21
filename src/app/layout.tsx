import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wen Chen - Software Developer & Computer Science Student",
  description: "Portfolio of Wen Chen, a Computer Science student at Cornell University specializing in full-stack development, machine learning, and software engineering.",
  keywords: "Wen Chen, Software Developer, Computer Science, Cornell University, Full Stack Development, Machine Learning, TypeScript, React, Next.js",
  openGraph: {
    title: "Wen Chen - Software Developer Portfolio",
    description: "Explore the projects and skills of Wen Chen, a passionate computer science student and full-stack developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
