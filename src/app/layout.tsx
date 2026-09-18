import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern and responsive personal developer portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 font-sans text-slate-200">
        {children}
      </body>
    </html>
  );
}
