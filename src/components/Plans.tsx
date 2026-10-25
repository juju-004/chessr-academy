import { Check, Crown, MapPin, Rocket, User, Users } from "lucide-react";
import { Heading, LinkButton, Section } from "./ui";
import { trialLink } from "../config";
import { countryName, useRegion, type Band } from "../lib/region";

const plans = [
  {
    name: "Community",
    icon: Users,
    price: { west: "$35–45", africa: "$15–25" },
    blurb: "Group chess with coaches and other kids.",
    features: [
      "3 scheduled group sessions a week",
      "A coach on duty in every session",
      "Group chat with other students",
      "Weekly games with coaches",
    ],
    launch: "Launch offer: $29–35 a month",
  },
  {
    name: "2 classes / week",
    icon: User,
    price: { west: "$70–90", africa: "$40" },
    blurb: "Private one-on-one coaching.",
    features: ["About 8 one-hour private classes a month", "Lessons planned around your child", "Game review and homework"],
  },
  {
    name: "4 classes / week",
    icon: Rocket,
    price: { west: "$130–160", africa: "$80" },
    blurb: "Faster progress, ideal for competitors.",
    features: ["About 16 one-hour private classes a month", "On consecutive or alternate days", "Tournament preparation"],
  },
  {
    name: "4 classes + Community",
    icon: Crown,
    price: { west: "$160–190", africa: "$100" },
    blurb: "Private coaching plus group play.",
    features: ["Everything in 4 classes / week", "Everything in Community", "Best mix of lessons and practice"],
  },
];

const bandLabel: Record<Band, string> = {
  west: "Europe, Americas, Gulf",
  africa: "Nigeria, Africa, South Asia",
};

export default function Plans() {
  const { band, country, manual, choose } = useRegion();

  const status = manual
    ? `Showing ${bandLabel[band]} prices.`
    : country
      ? `We detected you're in ${countryName(country)}, so we're showing ${bandLabel[band]} prices.`
      : `Showing ${bandLabel[band]} prices based on your timezone.`;

  const tab = (value: Band) => (
    <button
      onClick={() => choose(value)}
      aria-pressed={band === value}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
        band === value ? "grad text-white" : "text-muted hover:text-ink"
      }`}
    >
      {bandLabel[value]}
    </button>
  );

  return (
    <Section id="plans" className="bg-paper">
      <Heading
        eyebrow="Plans and prices"
        title="Simple monthly plans"
        text="Every plan starts with a free 30-minute trial class. Prices are per month."
      />

      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-line bg-white p-1">
          {tab("west")}
          {tab("africa")}
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted" aria-live="polite">
          <MapPin size={15} className="shrink-0 text-brand" aria-hidden /> {status}
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div key={p.name} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
            <div className="grad h-1.5" aria-hidden />
            <div className="flex flex-1 flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <p.icon size={22} aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.blurb}</p>

              <p className="mt-5">
                <span className="text-3xl font-extrabold">{p.price[band]}</span>
                <span className="text-sm text-muted"> / month</span>
              </p>
              {p.launch && band === "west" && (
                <p className="mt-2 inline-block self-start rounded-md bg-brand-soft px-2 py-1 text-xs font-bold text-brand">
                  {p.launch}
                </p>
              )}

              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <LinkButton href={trialLink(p.name)} className="mt-6 w-full">
                Start with a free trial
              </LinkButton>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
