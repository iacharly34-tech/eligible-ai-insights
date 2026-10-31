export function calculateClientValue(monthlyFees: number, retentionMonths: number, marginPercent: number, acquisitionCost: number) {
  const fees = Math.max(0, monthlyFees);
  const months = Math.max(0, retentionMonths);
  const margin = Math.min(100, Math.max(0, marginPercent)) / 100;
  const cost = Math.max(0, acquisitionCost);
  return {
    annualFees: fees * 12,
    lifetimeFees: fees * months,
    contributionAfterAcquisition: fees * months * margin - cost,
    paybackMonths: fees * margin > 0 ? cost / (fees * margin) : null,
  };
}