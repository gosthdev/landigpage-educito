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
  title: "Telar",
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
          href={process.env.NEXT_PUBLIC_MI_LINK}
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href={process.env.NEXT_PUBLIC_MI_LINK}
        />
      </head>
      <body className={`${manrope.variable} ${notoSerif.variable} font-sans bg-[radial-gradient(circle_at_top_right,#f8d3bf_0%,#fbf7f1_36%),linear-gradient(180deg,#f9f3ea_0%,#fdf9f3_100%)] text-[#1f251f] min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
