"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Feature, Plan, Testimonial } from "@/types/landing";

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

const plans: Plan[] = [
  {
    id: "artesano",
    title: "Artesano",
    subtitle: "Para creadores individuales y pequenos estudios.",
    monthlyPrice: "S/29",
    yearlyPrice: "S/24",
    cta: "Seleccionar Artesano",
    features: [
      "Inventario basico hasta 500 SKUs",
      "Gestion de 1 taller",
      "Soporte por email"
    ]
  },
  {
    id: "taller",
    title: "Taller",
    subtitle: "Para talleres en crecimiento y marcas emergentes.",
    monthlyPrice: "S/89",
    yearlyPrice: "S/74",
    highlighted: true,
    cta: "Seleccionar Taller",
    features: [
      "Inventario ilimitado",
      "Multiples talleres y operarios",
      "Analisis avanzados de produccion",
      "Soporte prioritario"
    ]
  },
  {
    id: "industrial",
    title: "Industrial",
    subtitle: "Para fabricas y produccion a gran escala.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    cta: "Contactar Ventas",
    features: [
      "Todo lo del plan Taller",
      "Integraciones ERP personalizadas",
      "Gerente de cuenta dedicado"
    ]
  }
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Antes de Telar SAS pasaba mas tiempo buscando hilos que disenando. Ahora todo fluye con control y claridad.",
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

type FormStatus = "idle" | "success" | "error";

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();

    if (!email.includes("@")) {
      setFormStatus("error");
      return;
    }

    setFormStatus("success");
    event.currentTarget.reset();
  };

  return (
    <div className="page-shell">
      <header className="top-nav">
        <div className="container nav-row">
          <p className="brand">Telar SAS</p>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Abrir menu"
          >
            Menu
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link href="#producto">Producto</Link>
            <Link href="#pricing">Pricing</Link>
            <button className="login-btn" type="button">
              Login
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-bg" aria-hidden="true">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzqc5SdpAyLe2Ar7siGK9B4Vtuc4pO6gNSRHIFmEoauX8Ue7Q9T3hr7SufyTw_XQ39HV5XwMm0TEcfJ1J5YP4oxNiT5t9ue7war-X3VM86WSS4APvGN1CGZWY8Ksdi9pHiNi7g97ulslwP_JrWMK14cJ53FvPoOW2MuthKk6Sgqi11kcsfuoZ7sMQF3IA94zXZ-UUU6tFKiyZKsL1rkNiNyNNoWhY0hzR7PCUKXW10U6CHEieYzApSaV3yxivie76F6F2cfK5yeXU"
              alt="Textura de tela"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="container hero-content">
            <h1>El Futuro del Arte Textil Digitalizado</h1>
            <p>
              Para artesanos y fabricas con tecnologia de vanguardia que
              respeta la tradicion.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#contacto">
                Empieza ahora
              </a>
              <button
                className="secondary-action"
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

        <section className="section" id="producto">
          <div className="container">
            <div className="section-heading">
              <h2>La Fusion Perfecta</h2>
              <p>
                Herramientas disenadas para la complejidad de la produccion
                textil.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <div className="chip">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="section-heading">
              <h2>Inversion Transparente</h2>
              <p>Planes que escalan con tus metas y tu ritmo de produccion.</p>
            </div>
            <div className="billing-switch" role="group" aria-label="Facturacion">
              <button
                type="button"
                className={!yearly ? "active" : ""}
                onClick={() => setYearly(false)}
              >
                Mensual
              </button>
              <button
                type="button"
                className={yearly ? "active" : ""}
                onClick={() => setYearly(true)}
              >
                Anual (ahorras 17%)
              </button>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card ${plan.highlighted ? "highlighted" : ""}`}
                  key={plan.id}
                >
                  <h3>{plan.title}</h3>
                  <p>{plan.subtitle}</p>
                  <p className="price-value">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    {plan.monthlyPrice === "Custom" ? "" : " / mes"}
                  </p>
                  <ul>
                    {plan.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <button type="button">{plan.cta}</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial">
          <div className="container testimonial-box">
            <p className="quote">&quot;{activeItem.quote}&quot;</p>
            <div className="author-row">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.author}
                width={68}
                height={68}
                className="avatar"
              />
              <div>
                <p className="author-name">{activeItem.author}</p>
                <p className="author-role">{activeItem.role}</p>
              </div>
            </div>
            <div className="carousel-controls">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={index === activeTestimonial ? "dot active" : "dot"}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="brand">Telar SAS</p>
            <p>2026 Telar SAS.</p>
          </div>
          <div>
            <p className="footer-title">Legal</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <p className="footer-title">Company</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p className="footer-title">Social</p>
            <p>Instagram</p>

          </div>
        </div>
      </footer>
    </div>
  );
}
