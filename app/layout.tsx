import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "prj-fin",
  description: "Brand system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
