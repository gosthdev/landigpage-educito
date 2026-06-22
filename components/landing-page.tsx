"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Feature, Testimonial } from "@/types/landing";
import { Scissors, Star, Check } from "lucide-react";

const features: Feature[] = [
  {
    icon: "INV",
    title: "Inventario Inteligente",
    description: "Controla hilos, tintes y telas con precisión milimétrica."
  },
  {
    icon: "PRO",
    title: "Gestión de Producción",
    description: "Traza cada pieza, desde el diseño hasta el telar final."
  },
  {
    icon: "ANA",
    title: "Análisis en Tiempo Real",
    description: "Visualiza la eficiencia de tus telares en segundos."
  }
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Antes pasaba más tiempo buscando hilos que diseñando. Ahora todo fluye con control y claridad.",
    author: "Elena Vargas",
    role: "Maestra Tejedora, Estudio Hebras",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFjlBxhropJfzvF5jVN3_sMRDuP5aoZkAPEWfQKM69bGp52Iomtn1T_xwj64jENKtyKxFZ_TkTlxhzNxxmj3KLnRlTy_OxyerC5XI-fo0Y4aIw3QDZVNkEZrj4x_tCOxBNByQIMjuyyWnT06V6Uu5NktVBB2ns7wHMgPGZzoOMFvXsi-ACGBWpKlzlI71Zb4p-2FiopOYSv4Zkt3YTgE65KLy2tqgUAx5NLlrj5-sFpgjT05F1LUe4JHxduJDAWnZeCYOiCgG9vA"
  },
  {
    quote:
      "Con los tableros de producción tomamos decisiones semanales con datos reales y no con intuición.",
    author: "Carlos Mendez",
    role: "Director de Operaciones, Fibras del Norte",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzqc5SdpAyLe2Ar7siGK9B4Vtuc4pO6gNSRHIFmEoauX8Ue7Q9T3hr7SufyTw_XQ39HV5XwMm0TEcfJ1J5YP4oxNiT5t9ue7war-X3VM86WSS4APvGN1CGZWY8Ksdi9pHiNi7g97ulslwP_JrWMK14cJ53FvPoOW2MuthKk6Sgqi11kcsfuoZ7sMQF3IA94zXZ-UUU6tFKiyZKsL1rkNiNyNNoWhY0hzR7PCUKXW10U6CHEieYzApSaV3yxivie76F6F2cfK5yeXU"
  }
];

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Dynamic grid simulation for the Weaving Matrix
  const [weavingGrid, setWeavingGrid] = useState<number[]>([
    1, 0, 2, 1, 0, 1, 2, 0,
    0, 2, 1, 0, 2, 0, 1, 1,
    2, 1, 0, 2, 1, 2, 0, 2,
    0, 0, 2, 1, 0, 1, 2, 0,
    1, 2, 0, 1, 2, 0, 1, 2
  ]);

  const activeItem = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial]
  );

  // Animate the loom weaving grid
  useEffect(() => {
    const interval = setInterval(() => {
      setWeavingGrid((prev) => {
        const next = [...prev];
        const count = 2; // change 2 cells at a time
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * next.length);
          next[idx] = (next[idx] + 1) % 3;
        }
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Testimonials auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-terracotta/20 selection:text-brand-charcoal">
      <header className="sticky top-0 z-50 border-b border-brand-border/60 bg-brand-cream/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <p className="font-sans text-lg font-black tracking-widest text-brand-charcoal leading-none">
                TELAR
              </p>
            </div>
          </div>

          <button
            className="rounded border border-brand-border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal md:hidden hover:bg-brand-bg-light transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
          >
            Menú
          </button>

          <nav
            className={`absolute top-20 left-0 right-0 border-b border-brand-border bg-brand-cream px-6 py-4 flex flex-col gap-4 font-sans text-xs uppercase tracking-wider font-bold text-brand-charcoal md:static md:border-none md:bg-transparent md:px-0 md:py-0 md:flex md:flex-row md:items-center md:gap-8 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <Link
              className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors border-b-2 border-transparent hover:border-brand-charcoal pb-1"
              href="#producto"
            >
              Producto
            </Link>
            <a
              className="text-brand-charcoal/70 hover:text-brand-charcoal transition-colors border-b-2 border-transparent hover:border-brand-charcoal pb-1"
              href="#testimonios"
            >
              Testimonios
            </a>
            
            <div className="flex flex-col gap-2 pt-2 border-t border-brand-border md:flex-row md:border-none md:pt-0 md:gap-4 md:ml-4">
              <a
                className="rounded border border-brand-charcoal px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-charcoal text-center transition-colors hover:bg-brand-bg-light"
                href={`${process.env.NEXT_PUBLIC_REDIRECT_URL}/sign-in`}
              >
                Iniciar sesión
              </a>
              <a
                className="rounded bg-brand-charcoal px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white text-center transition-colors hover:bg-brand-terracotta"
                href={`${process.env.NEXT_PUBLIC_REDIRECT_URL}/register`}
              >
                Registrarse
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="relative overflow-hidden px-6 py-16 md:py-24 lg:py-32"
          id="about"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col items-start text-left lg:col-span-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-terracotta bg-brand-terracotta/5 px-3 py-1 rounded border border-brand-terracotta/10">
                  Sistema de Gestión Textil y Confección · V1.0
                </span>
                
                <h1 className="mt-6 mb-6 font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-brand-charcoal text-balance">
                  <span className="italic font-normal text-brand-charcoal/90 block sm:inline">El Futuro del </span>
                  <span className="block">Arte Textil Digitalizado</span>
                </h1>
                
                <p className="mb-10 max-w-xl text-lg leading-relaxed text-brand-charcoal/70">
                  Gestiona tu taller, controla tu inventario y optimiza tu producción con la herramienta digital más sofisticada del sector textil.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
                  <a
                    className="relative rounded bg-brand-charcoal px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white text-center shadow-[4px_4px_0px_0px_#b05537] transition-all hover:bg-brand-terracotta hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-x-1 active:translate-y-1"
                    href={`${process.env.NEXT_PUBLIC_REDIRECT_URL}/sign-in`}
                  >
                    Empieza ahora
                  </a>
                  <button
                    className="flex items-center justify-center gap-2 rounded border border-brand-border bg-white/50 backdrop-blur-sm px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal transition-colors hover:bg-brand-bg-light"
                    type="button"
                    onClick={() =>
                      alert("Demo solicitada. Te contactaremos en menos de 24h.")
                    }
                  >
                    Ver demo interactiva
                  </button>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-8 border-t border-brand-border/60 pt-10 w-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/50 block mb-1">
                      Menos Mermas
                    </span>
                    <p className="font-serif text-3xl md:text-4xl font-normal italic text-brand-terracotta">
                      12.5%
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/50 block mb-1">
                      Trazabilidad
                    </span>
                    <p className="font-serif text-3xl md:text-4xl font-normal italic text-brand-charcoal">
                      100%
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/50 block mb-1">
                      Metros de Tela
                    </span>
                    <p className="font-serif text-3xl md:text-4xl font-normal italic text-brand-charcoal">
                      +2.4M
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[480px] bg-brand-bg-light rounded-[32px] p-6 border border-brand-border/50 relative">
                
                  <div className="bg-white rounded-2xl border border-brand-border shadow-md overflow-hidden">

                    <div className="bg-brand-charcoal text-white px-4 py-3 flex items-center justify-between text-[11px] font-mono tracking-wider">
                      <span>PANEL DE CONTROL V1.0</span>
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                    </div>

                    <div className="p-5 flex flex-col gap-4">



                      <div className="grid grid-cols-8 gap-1.5 p-3 bg-brand-cream rounded-lg border border-brand-border/50">
                        {weavingGrid.map((state, idx) => {
                          let bgClass = "bg-brand-cream";
                          if (state === 1) bgClass = "bg-brand-terracotta";
                          if (state === 2) bgClass = "bg-brand-charcoal";
                          return (
                            <div
                              key={idx}
                              className={`aspect-square w-full rounded transition-colors duration-500 ${bgClass}`}
                            />
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-brand-border/40 pt-3 text-[10px] font-mono">
                        <div>
                          <span className="text-brand-charcoal/40 block leading-tight">TELAR VINCULADO</span>
                          <span className="text-brand-charcoal font-bold block mt-0.5">Jacquard Circular #04</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white border border-brand-border/80 p-3 rounded-xl shadow-lg flex items-center gap-3 max-w-[210px] text-[10px] font-bold text-brand-charcoal uppercase tracking-wider z-10">
                    <div className="bg-brand-terracotta/10 text-brand-terracotta p-1.5 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 fill-brand-terracotta" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg-light border-y border-brand-border/40 px-6 py-24" id="producto">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-terracotta block mb-2">
                Innovación y Control
              </span>
              <h2 className="mb-4 font-serif text-4xl font-bold text-brand-charcoal">
                La Fusión Perfecta
              </h2>
              <p className="text-base text-brand-charcoal/70 leading-relaxed">
                Herramientas diseñadas meticulosamente para resolver la complejidad inherente a la producción y logística textil.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  className="group relative overflow-hidden rounded-xl border border-brand-border bg-white p-8 transition-all hover:shadow-md hover:-translate-y-1 duration-300"
                  key={feature.title}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-bg-light font-mono font-black text-xs tracking-wider text-brand-terracotta border border-brand-border/50 group-hover:bg-brand-terracotta group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 font-serif text-2xl font-bold text-brand-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-charcoal/60">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 relative overflow-hidden" id="testimonios">
   
          <div className="absolute top-12 left-1/2 -translate-x-1/2 font-serif text-[240px] leading-none text-brand-terracotta/5 select-none pointer-events-none">
            “
          </div>
          
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-terracotta block mb-4">
              Testimonios Reales
            </span>
            <p className="mb-10 font-serif text-2xl md:text-3xl font-normal leading-relaxed text-brand-charcoal italic">
              &quot;{activeItem.quote}&quot;
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-terracotta/20">
                <Image
                  src={activeItem.imageUrl}
                  alt={activeItem.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-charcoal">
                  {activeItem.author}
                </p>
                <p className="text-xs text-brand-charcoal/50 mt-0.5">
                  {activeItem.role}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-brand-terracotta w-6" : "bg-brand-border w-2"
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
