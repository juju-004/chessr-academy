import { Brain, Target, TrendingUp, Users } from "lucide-react";
import { Heading, Photo, Section } from "./ui";

const points = [
  { icon: Target, title: "Coaches matched to your child", text: "Trusted coaches who teach at your child's pace and level." },
  { icon: Brain, title: "Skills beyond the board", text: "Focus, planning and patience that help in school too." },
  { icon: TrendingUp, title: "Clear progress", text: "Regular feedback so you can see how your child is improving." },
  { icon: Users, title: "A friendly community", text: "Scheduled group sessions and weekly games with coaches." },
];

export default function Why() {
  return (
    <Section className="bg-paper">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Photo
          src="/images/class.jpg"
          alt="Children playing chess together"
          width={800}
          height={640}
          className="w-full rounded-2xl"
        />
        <div>
          <Heading
            center={false}
            eyebrow="Why ChessR"
            title="More than chess lessons"
            text="Structured coaching, friendly teachers and steady feedback help children grow on and off the board."
          />
          <ul className="mt-8 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl grad text-white">
                  <p.icon size={20} aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
