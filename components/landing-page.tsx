"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Feature, Testimonial } from "@/types/landing";

const features: Feature[] = [
  {
    icon: "INV",
    title: "Inventario Inteligente",
    description:
      "Controla hilos, tintes y telas."
  },
  {
    icon: "PRO",
    title: "Gestion de Produccion",
    description:
      "Traza cada pieza."
  },
  {
    icon: "ANA",
    title: "Analisis en Tiempo Real",
    description:
      "Visualiza todo en segundos."
  }
];


const testimonials: Testimonial[] = [
  {
    quote:
      "Antes de pasaba mas tiempo buscando hilos que disenando. Ahora todo fluye con control y claridad.",
    author: "Elena Vargas",
    role: "Maestra Tejedora, Estudio Hebras",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFjlBxhropJfzvF5jVN3_sMRDuP5aoZkAPEWfQKM69bGp52Iomtn1T_xwj64jENKtyKxFZ_TkTlxhzNxxmj3KLnRlTy_OxyerC5XI-fo0Y4aIw3QDZVNkEZrj4x_tCOxBNByQIMjuyyWnT06V6Uu5NktVBB2ns7wHMgPGZzoOMFvXsi-ACGBWpKlzlI71Zb4p-2FiopOYSv4Zkt3YTgE65KLy2tqgUAx5NLlrj5-sFpgjT05F1LUe4JHxduJDAWnZeCYOiCgG9vA"
  },
  {
    quote:
      "Con los tableros de produccion tomamos decisiones semanales con datos reales y no con intuicion.",
    author: "Carlos Mendez",
    role: "Director de Operaciones, Fibras del Norte",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzqc5SdpAyLe2Ar7siGK9B4Vtuc4pO6gNSRHIFmEoauX8Ue7Q9T3hr7SufyTw_XQ39HV5XwMm0TEcfJ1J5YP4oxNiT5t9ue7war-X3VM86WSS4APvGN1CGZWY8Ksdi9pHiNi7g97ulslwP_JrWMK14cJ53FvPoOW2MuthKk6Sgqi11kcsfuoZ7sMQF3IA94zXZ-UUU6tFKiyZKsL1rkNiNyNNoWhY0hzR7PCUKXW10U6CHEieYzApSaV3yxivie76F6F2cfK5yeXU"
  }
];

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const activeItem = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#fbf9f4] text-[#1b1c19] font-sans antialiased selection:bg-[#d0e9d4] selection:text-[#0b2013]">
      <header className="sticky top-0 z-10 border-b border-[#e5e1da] bg-[#fdfbf7]">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <p className="cursor-pointer font-serif text-2xl font-bold tracking-tight text-[#1b3022]">
            Telar
          </p>
          <button
            className="rounded-sm border border-[#e5e1da] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1b3022] md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            Menu
          </button>
          <nav
            className={`flex flex-col items-start gap-3 pb-4 font-serif text-xs uppercase tracking-wide text-[#1b3022] md:flex md:flex-row md:items-center md:gap-8 md:pb-0 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              className="border-b-2 border-[#1b3022] pb-1 font-bold"
              href="#producto"
            >
              Producto
            </Link>

            <a
              className="rounded-full px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b2013] transition-colors hover:bg-[#061b0e] hover:text-white"
              href={`${process.env.NEXT_PUBLIC_REDIRECT_UR}/sign-up`}
            >
              Iniciar sesion
            </a>
            <a
              className="rounded-full bg-[#d0e9d4] px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b2013] transition-colors hover:bg-[#061b0e] hover:text-white"
              href={`${process.env.NEXT_PUBLIC_REDIRECT_UR}/register`}
            >
              Registrarse
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-6 py-24 md:min-h-[870px]"
          id="about"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#cfe2d4] via-[#e8f0e8] to-[#fbf9f4]"
            aria-hidden="true"
          />
          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-tight text-[#1b3022] md:text-6xl">
              El Futuro del Arte Textil Digitalizado
            </h1>
            <p className="mb-12 max-w-2xl text-balance text-lg text-[#434843]">
              Gestiona tu taller, controla tu inventario y optimiza tu produccion.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="rounded-sm bg-[#d0e9d4] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0b2013] shadow-sm transition-colors hover:bg-[#061b0e] hover:text-white"
                href={`${process.env.NEXT_PUBLIC_REDIRECT_UR}/sign-in`}
              >
                Empieza ahora
              </a>
              <button
                className="flex items-center justify-center gap-2 rounded-sm border border-[#c3c8c1] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1b1c19] transition-colors hover:bg-[#f0eee9]"
                type="button"
                onClick={() =>
                  alert("Demo solicitada. Te contactaremos en menos de 24h.")
                }
              >
                Ver demo
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf9f4] px-6 py-24" id="producto">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-semibold text-[#1b3022]">
                La Fusion Perfecta
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#434843]">
                Herramientas disenadas meticulosamente para la complejidad de
                la produccion textil.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  className="group relative overflow-hidden rounded-sm border border-[#e4e2dd] bg-white p-10 transition-shadow hover:shadow-sm"
                  key={feature.title}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f3ee] font-bold text-[#1b3022]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-[#1b1c19]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#434843]">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section className="bg-[#fbf9f4] px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 block text-6xl text-[#4d6453]/20">“</span>
            <p className="mb-10 font-serif text-3xl font-semibold leading-snug text-[#1b3022]">
              &quot;{activeItem.quote}&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.author}
                width={68}
                height={68}
                className="rounded-full border-2 border-[#eae8e3]"
              />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1b1c19]">
                  {activeItem.author}
                </p>
                <p className="text-sm text-[#434843]">{activeItem.role}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === activeTestimonial ? "bg-[#1b3022]" : "bg-[#c3c8c1]"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
