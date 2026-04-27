import Link from 'next/link';
import { ArrowLeft, Lock, ArrowRight, CreditCard } from 'lucide-react';

export default function BoletaPage() {
  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen flex flex-col font-sans selection:bg-[#d0e9d4] selection:text-[#0b2013]">
      {/* TopAppBar: Transactional state - Navigation suppressed */}
      <header className="w-full top-0 border-b border-[#c3c8c1] bg-[#fbf9f4] flex justify-center items-center px-8 py-6 z-50">
        <div className="font-serif text-3xl font-semibold text-[#061b0e] tracking-tight">Telar SAS</div>
        <div className="absolute right-8 flex items-center gap-2 text-[#434843] hidden md:flex">
          <Lock className="w-5 h-5 fill-current" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest">Pago Seguro</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[#434843] hover:text-[#061b0e] transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Volver</span>
          </Link>
          <h1 className="font-serif text-5xl font-bold text-[#1b1c19] mb-4">Completa tu configuración</h1>
          <p className="font-sans text-lg text-[#434843] max-w-2xl">Ingresa tus datos de facturación para activar tu espacio de trabajo digital.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Billing Form */}
          <div className="lg:col-span-7 space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-[#1b1c19] border-b border-[#c3c8c1] pb-4 mb-6">Información de Facturación</h2>
              <form className="space-y-6" action="/pago">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="firstName">Nombres</label>
                    <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="firstName" name="firstName" placeholder="María Eugenia" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="lastName">Apellidos</label>
                    <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="lastName" name="lastName" placeholder="Pérez" type="text" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="email">Correo Electrónico</label>
                  <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="email" name="email" placeholder="ma.eugenia@ejemplo.com" type="email" required />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="document">Documento de Identificación (DNI/Cédula)</label>
                  <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="document" name="document" placeholder="12345678" type="text" required />
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="address">Dirección</label>
                  <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="address" name="address" placeholder="Av. Principal 123" type="text" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="city">Ciudad</label>
                    <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="city" name="city" placeholder="Lima" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="zip">Código Postal</label>
                    <input className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors" id="zip" name="zip" placeholder="15001" type="text" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#1b1c19]" htmlFor="country">País / Región</label>
                  <select className="w-full bg-[#f0eee9] border border-[#c3c8c1] rounded p-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] outline-none transition-colors appearance-none" id="country" name="country" required>
                    <option value="PE">Perú</option>
                    <option value="CO">Colombia</option>
                    <option value="CL">Chile</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                  </select>
                </div>
                
                <button type="submit" className="hidden" id="submit-boleta"></button>
              </form>
            </section>
          </div>

          {/* Right Column: Order Summary Sticky Panel */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-12 bg-[#f5f3ee] border border-[#c3c8c1] rounded-xl p-8 lg:p-10 shadow-sm shadow-[#061b0e]/5">
              <h2 className="font-serif text-2xl font-semibold text-[#1b1c19] mb-8">Resumen de la Orden</h2>
              
              {/* Plan Details */}
              <div className="flex items-start justify-between mb-8 pb-8 border-b border-[#c3c8c1]">
                <div>
                  <h3 className="font-serif text-3xl font-semibold text-[#1b1c19] mb-1">Taller</h3>
                  <p className="font-sans text-base text-[#434843]">Suscripción mensual</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-semibold text-[#061b0e]">$89</span>
                  <span className="font-sans text-base text-[#434843] block">/ mes</span>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-3 mb-8 pt-6 border-[#c3c8c1]">
                <div className="flex justify-between font-sans text-base text-[#434843]">
                  <span>Subtotal</span>
                  <span>$89.00</span>
                </div>
                <div className="flex justify-between font-sans text-base text-[#434843]">
                  <span>Impuestos (Calculados al final)</span>
                  <span>--</span>
                </div>
                <div className="flex justify-between font-serif text-2xl font-semibold text-[#1b1c19] pt-3 mt-3 border-t border-[#c3c8c1] border-dashed">
                  <span>Total a Pagar Hoy</span>
                  <span>$89.00</span>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => document.getElementById('submit-boleta')?.click()}
                className="w-full bg-[#061b0e] text-white py-4 px-6 rounded font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#364c3c] transition-colors flex justify-center items-center gap-2 group"
              >
                  Proceder al Pago
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="font-sans text-sm text-[#434843] text-center mt-4">
                  Al proceder, aceptas nuestros <Link className="text-[#061b0e] underline underline-offset-2" href="#">Términos de Servicio</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#c3c8c1] bg-white mt-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-semibold text-[#061b0e]">Telar SAS</div>
        <div className="font-sans text-sm text-[#434843]">© 2026 Telar SAS. Creado para el Taller Moderno.</div>
      </footer>
    </div>
  );
}
