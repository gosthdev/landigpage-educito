"use client";

import type { FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, CreditCard, HelpCircle } from 'lucide-react';

type FieldElement = HTMLInputElement;

const clearValidity = (event: FormEvent<FieldElement>) => {
  event.currentTarget.setCustomValidity('');
};

const setValidityMessage = (
  event: FormEvent<FieldElement>,
  messages: { missing: string; invalid?: string }
) => {
  const { validity } = event.currentTarget;

  if (validity.valueMissing) {
    event.currentTarget.setCustomValidity(messages.missing);
    return;
  }

  if (validity.typeMismatch || validity.patternMismatch) {
    event.currentTarget.setCustomValidity(messages.invalid ?? messages.missing);
    return;
  }

  event.currentTarget.setCustomValidity(messages.invalid ?? messages.missing);
};

export default function PagoPage() {
  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen flex flex-col font-sans antialiased">
      {/* Minimal Header for Checkout */}
      <header className="w-full px-8 py-6 border-b border-[#e4e2dd] bg-[#fbf9f4]">
        <div className="max-w-[1280px] mx-auto flex justify-center items-center relative">
          <Link href="/boleta" className="absolute left-0 flex items-center gap-2 text-[#434843] hover:text-[#061b0e] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans text-xs font-bold uppercase tracking-widest">Volver a facturación</span>
          </Link>
          <div className="font-serif text-3xl font-semibold text-[#061b0e]">Telar SAS</div>
        </div>
      </header>

      {/* Main Checkout Canvas */}
      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-8">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Payment Details */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <h1 className="font-serif text-3xl font-semibold text-[#061b0e] mb-2">Método de Pago</h1>
              <p className="font-sans text-base text-[#434843]">Elige cómo te gustaría pagar tu suscripción al taller.</p>
            </div>

            {/* Payment Options Tabs */}
            <div className="flex gap-4 mb-2">
              <button type="button" className="flex-1 py-4 px-6 rounded-lg border-2 border-[#061b0e] bg-[#f0eee9] flex items-center justify-center gap-3 transition-colors relative overflow-hidden">
                <CreditCard className="w-6 h-6 text-[#061b0e]" />
                <span className="font-sans text-lg font-semibold text-[#061b0e]">Tarjeta de Crédito</span>
                {/* Active Indicator */}
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#061b0e]"></div>
              </button>
            </div>

            {/* High-Fidelity Card Form */}
            <form className="bg-[#f5f3ee] p-8 rounded-xl border border-[#e4e2dd] shadow-sm flex flex-col gap-6" action="/confirmacion" id="pago-form">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]" htmlFor="cardName">Nombre en la tarjeta</label>
                <input className="w-full bg-[#fbf9f4] border border-[#c3c8c1] rounded-md px-4 py-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] transition-colors outline-none" id="cardName" name="cardName" placeholder="Como aparece en la tarjeta" type="text" required onInvalid={(event) => setValidityMessage(event, { missing: 'Ingresa el nombre que aparece en la tarjeta.' })} onInput={clearValidity} />
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]" htmlFor="cardNumber">Número de tarjeta</label>
                <div className="relative">
                  <input className="w-full bg-[#fbf9f4] border border-[#c3c8c1] rounded-md pl-4 pr-12 py-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] transition-colors outline-none tracking-widest" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" type="text" inputMode="numeric" pattern="[0-9 ]{13,19}" required onInvalid={(event) => setValidityMessage(event, { missing: 'Ingresa el número de tu tarjeta.', invalid: 'Usa solo números y espacios (13 a 19 dígitos).' })} onInput={clearValidity} />
                  <CreditCard className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#737973]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]" htmlFor="expiry">Vencimiento</label>
                  <input className="w-full bg-[#fbf9f4] border border-[#c3c8c1] rounded-md px-4 py-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] transition-colors outline-none" id="expiry" name="expiry" placeholder="MM/AA" type="text" inputMode="numeric" pattern="(0[1-9]|1[0-2])/[0-9]{2}" required onInvalid={(event) => setValidityMessage(event, { missing: 'Ingresa el vencimiento.', invalid: 'Usa el formato MM/AA.' })} onInput={clearValidity} />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843] flex justify-between" htmlFor="cvv">
                      CVV
                      <HelpCircle className="w-4 h-4 text-[#737973] hover:text-[#061b0e] cursor-help" />
                  </label>
                  <input className="w-full bg-[#fbf9f4] border border-[#c3c8c1] rounded-md px-4 py-3 font-sans text-base text-[#1b1c19] focus:border-[#061b0e] focus:ring-1 focus:ring-[#061b0e] transition-colors outline-none" id="cvv" name="cvv" maxLength={4} placeholder="•••" type="password" inputMode="numeric" pattern="[0-9]{3,4}" required onInvalid={(event) => setValidityMessage(event, { missing: 'Ingresa el CVV.', invalid: 'Usa 3 o 4 dígitos.' })} onInput={clearValidity} />
                </div>
              </div>

              {/* Secure Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[#434843] bg-[#e4e2dd] py-2 px-4 rounded-full mx-auto inline-flex">
                <Lock className="w-4 h-4 text-[#061b0e]" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#061b0e]">Encriptación Segura 256-bit</span>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary & Total */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="bg-[#fbf9f4] border border-[#e4e2dd] rounded-xl p-8 sticky top-8 flex flex-col gap-6 shadow-sm">
              <h2 className="font-serif text-2xl font-semibold text-[#061b0e] border-b border-[#e4e2dd] pb-4">Resumen de Orden</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-sans text-base text-[#1b1c19] font-semibold">Taller Plan Mensual</p>
                      <p className="font-sans text-xs font-bold tracking-widest uppercase text-[#434843] mt-1">Cant: 1</p>
                    </div>
                  </div>
                  <span className="font-sans text-base text-[#1b1c19]">$89.00</span>
                </div>
              </div>

              <div className="border-t border-[#e4e2dd] border-dashed pt-4 flex flex-col gap-2">
                <div className="flex justify-between font-sans text-base text-[#434843]">
                  <span>Subtotal</span>
                  <span>$89.00</span>
                </div>
              </div>

              <div className="border-t border-[#e4e2dd] pt-4 flex justify-between items-end">
                <span className="font-sans text-lg text-[#1b1c19]">Total</span>
                <span className="font-serif text-3xl font-semibold text-[#061b0e]">$89.00</span>
              </div>

              <button
                className="w-full mt-4 bg-[#061b0e] text-white font-sans text-lg py-4 rounded-lg hover:bg-[#1b1c19] transition-colors flex justify-center items-center gap-2"
                form="pago-form"
                type="submit"
              >
                  <Lock className="w-4 h-4" />
                  Pagar $89.00
              </button>
              <p className="text-center font-sans text-xs font-bold uppercase tracking-widest text-[#434843] mt-2">
                  Al confirmar, aceptas nuestros Términos de Servicio.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#e4e2dd] bg-[#ffffff] mt-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-semibold text-[#061b0e]">Telar SAS</div>
        <div className="font-sans text-sm text-[#434843] opacity-80">
            © 2026 Telar SAS. Creado para el Taller Moderno.
        </div>
      </footer>
    </div>
  );
}