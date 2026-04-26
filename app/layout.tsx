import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif"
});

export const metadata: Metadata = {
  title: "Telar SAS | Landing",
  description: "El futuro del arte textil digitalizado."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${notoSerif.variable}`}>{children}</body>
    </html>
  );
}
