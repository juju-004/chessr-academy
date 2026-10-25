import { useEffect, useRef, useState } from "react";

export type Band = "west" | "africa";

// "africa" band = Nigeria / Africa / South Asia pricing. Everything else = Western / Gulf.
const AFRICA = new Set(
  "DZ AO BJ BW BF BI CV CM CF TD KM CG CD CI DJ EG GQ ER SZ ET GA GM GH GN GW KE LS LR LY MG MW ML MR MU MA MZ NA NE NG RW ST SN SC SL SO ZA SS SD TZ TG TN UG ZM ZW".split(" "),
);
const SOUTH_ASIA = new Set("IN PK BD LK NP BT MV AF".split(" "));

export function bandFromCountry(code: string): Band {
  const c = code.toUpperCase();
  return AFRICA.has(c) || SOUTH_ASIA.has(c) ? "africa" : "west";
}

/** Instant, no network, no permission. Used first, then refined by the IP lookup. */
export function bandFromTimezone(): Band {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (tz.startsWith("Africa/")) return "africa";
    if (/^Asia\/(Kolkata|Calcutta|Karachi|Dhaka|Colombo|Kathmandu|Thimphu|Kabul)/.test(tz)) return "africa";
  } catch {
    /* ignore */
  }
  return "west";
}

export function countryName(code: string): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

const CACHE_KEY = "chessr_academy_country";
const CACHE_MS = 7 * 24 * 60 * 60 * 1000;

function readCache(): string | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { c, t } = JSON.parse(raw) as { c: string; t: number };
    return Date.now() - t < CACHE_MS && /^[A-Z]{2}$/.test(c) ? c : null;
  } catch {
    return null;
  }
}

function writeCache(c: string) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ c, t: Date.now() }));
  } catch {
    /* ignore */
  }
}

async function getJSON(url: string, outer: AbortSignal, ms = 3000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  const onAbort = () => ctrl.abort();
  outer.addEventListener("abort", onAbort);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } finally {
    clearTimeout(timer);
    outer.removeEventListener("abort", onAbort);
  }
}

/** Two free IP lookups, tried in order. Returns an ISO country code or null. */
async function lookupCountry(signal: AbortSignal): Promise<string | null> {
  const sources: Array<() => Promise<string | undefined>> = [
    async () => (await getJSON("https://api.country.is/", signal)).country,
    async () => (await getJSON("https://ipwho.is/?fields=success,country_code", signal)).country_code,
  ];
  for (const src of sources) {
    try {
      const code = await src();
      if (typeof code === "string" && /^[A-Za-z]{2}$/.test(code)) return code.toUpperCase();
    } catch {
      /* try the next source */
    }
  }
  return null;
}

export function useRegion() {
  const [band, setBand] = useState<Band>(bandFromTimezone);
  const [country, setCountry] = useState<string | null>(null);
  const [manual, setManual] = useState(false);
  const manualRef = useRef(false);

  useEffect(() => {
    const ctrl = new AbortController();
    let live = true;

    const apply = (code: string) => {
      if (!live) return;
      setCountry(code);
      if (!manualRef.current) setBand(bandFromCountry(code));
    };

    const cached = readCache();
    if (cached) {
      apply(cached);
    } else {
      lookupCountry(ctrl.signal).then((code) => {
        if (code) {
          writeCache(code);
          apply(code);
        }
      });
    }

    return () => {
      live = false;
      ctrl.abort();
    };
  }, []);

  const choose = (b: Band) => {
    manualRef.current = true;
    setManual(true);
    setBand(b);
  };

  return { band, country, manual, choose };
}
