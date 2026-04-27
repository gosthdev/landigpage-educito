import Link from 'next/link';
import { Check, ArrowRight, Download } from 'lucide-react';

export default function ConfirmacionPage() {
  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen flex flex-col items-center justify-center p-6 antialiased selection:bg-[#d0e9d4] selection:text-[#061b0e]">
      {/* Main Content Canvas */}
      <main className="w-full max-w-2xl flex flex-col items-center">
        {/* Decorative & Icon Header */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c3c8c1] to-transparent -z-10"></div>
          <div className="w-24 h-24 rounded-full bg-[#d0e9d4] border-8 border-[#fbf9f4] flex items-center justify-center shadow-sm">
            <Check className="w-10 h-10 text-[#061b0e]" strokeWidth={3} />
          </div>
        </div>

        {/* Headings */}
        <h1 className="font-serif text-5xl font-bold text-[#061b0e] text-center mb-4">¡Bienvenido al Taller!</h1>
        <p className="font-sans text-lg text-[#434843] text-center max-w-lg mb-12">
            Tu suscripción a Telar SAS ahora está completamente activa. Estás listo para gestionar tu taller digital y la red de artesanos.
        </p>

        {/* Receipt Details Card */}
        <div className="w-full max-w-md bg-[#ffffff] border border-[#c3c8c1] rounded-xl overflow-hidden mb-10 shadow-sm relative">
          {/* Decorative Top Edge */}
          <div className="h-2 w-full bg-[#d0e9d4]"></div>
          
          <div className="p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#061b0e] mb-6 border-b border-[#c3c8c1] pb-4">Detalles de Suscripción</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#c3c8c1] border-dashed pb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]">Plan</span>
                <span className="font-sans text-base text-[#061b0e] font-bold">Taller Mensual</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#c3c8c1] border-dashed pb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]">Ciclo de facturación</span>
                <span className="font-sans text-base text-[#1b1c19]">Mensual</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#c3c8c1] border-dashed pb-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]">Monto Pagado</span>
                <span className="font-sans text-base text-[#1b1c19]">$89.00 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#434843]">Próxima facturación</span>
                <span className="font-sans text-base text-[#434843]">27 de Mayo, 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="/" className="flex-1 bg-[#061b0e] text-white font-sans text-base py-3 px-6 rounded-lg hover:bg-[#364c3c] transition-colors flex items-center justify-center gap-2 group">
              Ir al Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button type="button" className="flex-1 bg-transparent border border-[#737973] text-[#061b0e] font-sans text-base py-3 px-6 rounded-lg hover:bg-[#f0eee9] transition-colors flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Descargar Recibo
          </button>
        </div>
      </main>
    </div>
  );
}