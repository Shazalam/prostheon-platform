import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prostheon - Empowering Innovation Through Intelligent Software",
  description: "Global SaaS & product development company specializing in MERN, Next.js, cloud, and AI-integrated applications. Transform your business with scalable digital products.",
  keywords: "SaaS, web development, app development, MERN stack, Next.js, AI solutions, product engineering, Prostheon",
  authors: [{ name: "Prostheon" }],
  openGraph: {
    title: "Prostheon - Empowering Innovation",
    description: "Build scalable digital products that transform businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
