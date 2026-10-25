const stats = [
  { value: "120+", label: "Students trained" },
  { value: "13+", label: "Partner schools" },
  { value: "2,000+", label: "Lessons delivered" },
  { value: "4.7★", label: "Average rating" },
];

export default function Stats() {
  return (
    <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-xl md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-5 text-center md:p-6">
            <dd className="grad-text text-3xl font-extrabold md:text-4xl" style={{ backgroundImage: "linear-gradient(90deg,#06b6f5,#4f46e5 60%,#a855f7)" }}>
              {s.value}
            </dd>
            <dt className="mt-1 text-sm text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
