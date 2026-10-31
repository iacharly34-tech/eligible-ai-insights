import { describe, expect, it } from "vitest";
import { availableSlots, followupDue, isValidSlot, parisToUtc } from "./demo-booking";

describe("demo booking", () => {
  it("converts Paris wall time to UTC (winter = UTC+1)", () => {
    expect(parisToUtc(2026, 11, 3, 9, 30).toISOString()).toBe("2026-11-03T08:30:00.000Z");
  });
  it("offers no weekend slots and starts tomorrow", () => {
    const now = new Date("2026-10-30T10:00:00Z"); // Friday
    const slots = availableSlots(now);
    expect(slots[0]).toBe("2026-11-02T08:30:00.000Z"); // Monday 09:30 Paris
  });
  it("removes an already booked slot", () => {
    const now = new Date("2026-10-30T10:00:00Z");
    expect(isValidSlot("2026-11-02T08:30:00.000Z", now, ["2026-11-02T08:30:00.000Z"])).toBe(false);
  });
  it("sends reminder 1 at J+2 and reminder 2 at J+5 only", () => {
    const base = { created_at: "2026-10-01T10:00:00Z", statut: "nouveau", rdv_at: null };
    expect(followupDue({ ...base, followup_count: 0 }, new Date("2026-10-02T10:00:00Z"))).toBe(null);
    expect(followupDue({ ...base, followup_count: 0 }, new Date("2026-10-03T10:00:00Z"))).toBe(1);
    expect(followupDue({ ...base, followup_count: 1 }, new Date("2026-10-05T10:00:00Z"))).toBe(null);
    expect(followupDue({ ...base, followup_count: 1 }, new Date("2026-10-06T10:00:00Z"))).toBe(2);
    expect(followupDue({ ...base, followup_count: 2 }, new Date("2026-10-20T10:00:00Z"))).toBe(null);
  });
  it("stops reminders once a meeting is booked", () => {
    expect(followupDue({ created_at: "2026-10-01T10:00:00Z", statut: "rdv_pris", followup_count: 0, rdv_at: "2026-10-04T08:00:00Z" }, new Date("2026-10-10T10:00:00Z"))).toBe(null);
  });
});
