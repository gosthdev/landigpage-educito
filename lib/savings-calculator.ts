export interface SavingsInput {
  clients: number;
  quotesPerClientPerMonth: number;
  minutesPerManualSearch: number;
  minutesPerSystemSearch?: number;
}

export interface SavingsResult {
  totalQuotesPerMonth: number;
  manualHoursPerMonth: number;
  systemHoursPerMonth: number;
  hoursSavedPerMonth: number;
  hoursSavedPerYear: number;
}

// Tiempo (en minutos) que tarda encontrar una cotización usando el sistema.
export const DEFAULT_SYSTEM_MINUTES = 0.2;

export function calculateSavings(input: SavingsInput): SavingsResult {
  const clients = Math.max(0, input.clients || 0);
  const quotes = Math.max(0, input.quotesPerClientPerMonth || 0);
  const manualMin = Math.max(0, input.minutesPerManualSearch || 0);
  const systemMin = Math.max(0, input.minutesPerSystemSearch ?? DEFAULT_SYSTEM_MINUTES);

  const totalQuotesPerMonth = clients * quotes;

  const manualMinutesPerMonth = totalQuotesPerMonth * manualMin;
  const systemMinutesPerMonth = totalQuotesPerMonth * systemMin;
  const savedMinutesPerMonth = Math.max(0, manualMinutesPerMonth - systemMinutesPerMonth);

  const manualHoursPerMonth = manualMinutesPerMonth / 60;
  const systemHoursPerMonth = systemMinutesPerMonth / 60;
  const hoursSavedPerMonth = savedMinutesPerMonth / 60;
  const hoursSavedPerYear = hoursSavedPerMonth * 12;

  return {
    totalQuotesPerMonth,
    manualHoursPerMonth,
    systemHoursPerMonth,
    hoursSavedPerMonth,
    hoursSavedPerYear,
  };
}