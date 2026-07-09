"use client";

import { useState } from "react";
import {
  calculateSavings,
  DEFAULT_SYSTEM_MINUTES,
  type SavingsResult,
} from "@/lib/savings-calculator";

export function SavingsCalculator() {
  const [clients, setClients] = useState(20);
  const [quotesPerClient, setQuotesPerClient] = useState(5);
  const [manualMinutes, setManualMinutes] = useState(5);
  const [result, setResult] = useState<SavingsResult | null>(null);

  const handleCalculate = () => {
    setResult(
      calculateSavings({
        clients,
        quotesPerClientPerMonth: quotesPerClient,
        minutesPerManualSearch: manualMinutes,
      })
    );
  };

  return (
    <section className="mx-auto max-w-xl rounded-xl border border-gray-200 bg-white p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Calculadora de ahorro de tiempo
      </h2>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
          Número de clientes
          <input
            type="number"
            min={0}
            data-testid="input-clients"
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            className="rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
          Cotizaciones por cliente al mes
          <input
            type="number"
            min={0}
            data-testid="input-quotes"
            value={quotesPerClient}
            onChange={(e) => setQuotesPerClient(Number(e.target.value))}
            className="rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-gray-700">
          Minutos en encontrar una cotización en el cuaderno
          <input
            type="number"
            min={0}
            step="0.5"
            data-testid="input-manual-minutes"
            value={manualMinutes}
            onChange={(e) => setManualMinutes(Number(e.target.value))}
            className="rounded border border-gray-300 px-3 py-2"
          />
        </label>

        <button
          type="button"
          data-testid="calculate-button"
          onClick={handleCalculate}
          className="mt-2 rounded bg-gray-900 px-6 py-3 font-bold text-white transition-colors hover:bg-gray-700"
        >
          Calcular ahorro
        </button>
      </div>

      {result && (
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            Cotizaciones al mes:{" "}
            <span data-testid="total-quotes" className="font-bold text-gray-900">
              {result.totalQuotesPerMonth}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Horas perdidas al mes con cuaderno:{" "}
            <span data-testid="manual-hours-month" className="font-bold text-gray-900">
              {result.manualHoursPerMonth.toFixed(1)} h
            </span>
          </p>
          <p className="text-base text-gray-800">
            Ahorro al mes:{" "}
            <span data-testid="hours-saved-month" className="font-bold text-green-700">
              {result.hoursSavedPerMonth.toFixed(1)} h
            </span>
          </p>
          <p className="text-base text-gray-800">
            Ahorro al año:{" "}
            <span data-testid="hours-saved-year" className="font-bold text-green-700">
              {result.hoursSavedPerYear.toFixed(1)} h
            </span>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            Asumimos ~{DEFAULT_SYSTEM_MINUTES} min por búsqueda con el sistema.
          </p>
        </div>
      )}
    </section>
  );
}