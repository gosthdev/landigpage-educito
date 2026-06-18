import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./tailwind.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif"
});

export const metadata: Metadata = {
  title: "Telar SAS",
  description: "El futuro del arte textil digitalizado."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preconnect"
          href="https://develop.d3m7i735wdbsu6.amplifyapp.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://develop.d3m7i735wdbsu6.amplifyapp.com"
        />
      </head>
      <body className={`${manrope.variable} ${notoSerif.variable} font-sans bg-[radial-gradient(circle_at_top_right,#f8d3bf_0%,#fbf7f1_36%),linear-gradient(180deg,#f9f3ea_0%,#fdf9f3_100%)] text-[#1f251f] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
