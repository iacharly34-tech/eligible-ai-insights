import { describe, expect, it } from "vitest";
import { calculateClientValue } from "./client-value";

describe("valeur économique d'un client cabinet", () => {
  it("valorise 250 euros HT mensuels à 3 000 euros annuels", () => {
    expect(calculateClientValue(250, 12, 100, 0).annualFees).toBe(3000);
  });
  it("distingue honoraires, marge et coût d'acquisition", () => {
    const result = calculateClientValue(250, 36, 40, 300);
    expect(result.lifetimeFees).toBe(9000);
    expect(result.contributionAfterAcquisition).toBe(3300);
    expect(result.paybackMonths).toBe(3);
  });
  it("ne calcule pas de délai de retour avec une marge nulle", () => {
    expect(calculateClientValue(250, 36, 0, 300).paybackMonths).toBeNull();
  });
});