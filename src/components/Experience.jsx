import { motion } from 'framer-motion';
import { Shield, Video, Server, Loop } from 'lucide-react';

const roles = [
  {
    company: 'Adobe',
    icon: Video,
    color: 'from-pink-500/20 via-rose-500/10 to-transparent',
    bullets: [
      'Auto-generate video edits with ML-assisted timelines',
      'Scaled features across millions of users',
    ],
    hover: 'timeline compress → auto edit',
  },
  {
    company: 'Bosch',
    icon: Shield,
    color: 'from-red-500/20 via-blue-500/10 to-transparent',
    bullets: ['Threat detection on embedded systems', 'Red → Blue: attacks blocked'],
    hover: 'mesh detects & blocks',
  },
  {
    company: 'IIT Bombay · SysAdmin',
    icon: Server,
    color: 'from-teal-400/20 via-emerald-400/10 to-transparent',
    bullets: ['Upgraded clusters + networks', 'Terminal-first automation'],
    hover: 'servers hum · graph glows',
  },
  {
    company: 'senzcraft',
    icon: Loop,
    color: 'from-violet-400/20 via-fuchsia-400/10 to-transparent',
    bullets: ['Human-in-the-loop ML systems', 'Practical feedback cycles'],
    hover: 'model ↔ human handoff',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {roles.map((r) => (
          <Card key={r.company} role={r} />
        ))}
      </div>
    </section>
  );
}

function Card({ role }) {
  const Icon = role.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950/60 p-5"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${role.color}`} />
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <Icon className="h-5 w-5 text-teal-300" />
          </div>
          <h3 className="text-lg font-semibold">{role.company}</h3>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-neutral-300">
          {role.bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
        <p className="mt-4 inline-block rounded bg-white/5 px-2 py-1 text-xs text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100">
          {role.hover}
        </p>
      </div>
    </motion.div>
  );
}
