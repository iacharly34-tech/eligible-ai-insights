// Pure helpers for demo meeting slots and follow-up timing (Europe/Paris).

export const SLOT_MINUTES = 30;
export const BOOKING_DAYS = 10; // business days offered
const SLOT_TIMES = ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"];

/** Offset (ms) of Europe/Paris vs UTC at a given instant. */
function parisOffsetMs(at: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris", hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).formatToParts(at);
  const g = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(g("year"), g("month") - 1, g("day"), g("hour"), g("minute"), g("second"));
  return asUtc - Math.floor(at.getTime() / 1000) * 1000;
}

/** Converts a Paris wall-clock time to a UTC Date. */
export function parisToUtc(y: number, m: number, d: number, hh: number, mm: number): Date {
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const off = parisOffsetMs(new Date(guess));
  return new Date(guess - off);
}

function parisYmd(at: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit", weekday: "short" }).formatToParts(at);
  const g = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { y: Number(g("year")), m: Number(g("month")), d: Number(g("day")), wd: g("weekday") };
}

/** All bookable slot starts (ISO UTC), from tomorrow, weekdays only, minus taken ones. */
export function availableSlots(now: Date, taken: string[] = []): string[] {
  const takenSet = new Set(taken.map((t) => new Date(t).toISOString()));
  const out: string[] = [];
  let days = 0;
  for (let i = 1; days < BOOKING_DAYS && i < 30; i++) {
    const day = new Date(now.getTime() + i * 86400000);
    const { y, m, d, wd } = parisYmd(day);
    if (wd === "Sat" || wd === "Sun") continue;
    days++;
    for (const t of SLOT_TIMES) {
      const [hh, mm] = t.split(":").map(Number);
      const iso = parisToUtc(y, m, d, hh, mm).toISOString();
      if (!takenSet.has(iso)) out.push(iso);
    }
  }
  return out;
}

export function isValidSlot(iso: string, now: Date, taken: string[] = []): boolean {
  return availableSlots(now, taken).includes(new Date(iso).toISOString());
}

/** Follow-up schedule: reminder 1 at J+2, reminder 2 at J+5, then stop. */
export const FOLLOWUP_DAYS = [2, 5] as const;

export function followupDue(r: { created_at: string; statut: string; followup_count: number; rdv_at: string | null }, now: Date): number | null {
  if (r.rdv_at || !["nouveau", "relance"].includes(r.statut)) return null;
  const n = r.followup_count;
  if (n >= FOLLOWUP_DAYS.length) return null;
  const due = new Date(r.created_at).getTime() + FOLLOWUP_DAYS[n] * 86400000;
  return now.getTime() >= due ? n + 1 : null;
}

export function formatParis(iso: string): string {
  return new Date(iso).toLocaleString("fr-FR", { timeZone: "Europe/Paris", weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
}
