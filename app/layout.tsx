import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobFlow — Automate Your Job Search",
  description: "AI-powered job search automation. Personalized cover letters, auto-apply, multi-platform search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
