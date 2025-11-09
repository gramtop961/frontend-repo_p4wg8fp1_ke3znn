import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 text-white">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">About</h2>
          <p className="mt-4 text-neutral-300">
            I like shipping real things. IIT Bombay taught me systems thinking. Adobe taught me scale and product polish. ResoBin taught me how to build end-to-end: data, models, UX, and all the glue in between. I enjoy the mix of ML + engineering + design — the part where ideas become tools.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-400">
            <li className="group">
              <span className="font-mono text-teal-300">$</span> debugging things at 3AM
              <span className="ml-2 hidden rounded bg-neutral-900/70 px-2 py-1 font-mono text-xs text-amber-300 group-hover:inline">[log] Error: no one admitted to breaking it</span>
            </li>
            <li className="group">
              <span className="font-mono text-teal-300">$</span> Adobe Express
              <span className="ml-2 hidden rounded bg-neutral-900/70 px-2 py-1 font-mono text-xs text-sky-300 group-hover:inline">timeline.autoAdjust() → render()</span>
            </li>
            <li className="group">
              <span className="font-mono text-teal-300">$</span> ResoBin
              <span className="ml-2 hidden rounded bg-neutral-900/70 px-2 py-1 font-mono text-xs text-purple-300 group-hover:inline">query → retrieve → rerank → respond</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <motion.div
            style={{ rotate, scale }}
            className="aspect-square w-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-1"
          >
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-950">
              <div className="grid grid-cols-3 gap-3 p-6">
                <VizBox title="code" color="from-teal-400/80" />
                <VizBox title="neurons" color="from-sky-400/80" />
                <VizBox title="system" color="from-purple-400/80" />
              </div>
            </div>
          </motion.div>
          <p className="mt-3 text-center text-xs text-neutral-400">scroll → code → neurons → system</p>
        </div>
      </div>
    </section>
  );
}

function VizBox({ title, color }) {
  return (
    <div className={`group relative aspect-square w-28 rounded-lg bg-gradient-to-br ${color} to-transparent p-[1px]`}> 
      <div className="flex h-full w-full items-center justify-center rounded-md bg-neutral-950/90">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">{title}</span>
      </div>
      <div className="absolute -inset-px rounded-lg opacity-0 blur group-hover:opacity-100" style={{ background: 'radial-gradient(60px 60px at 50% 50%, rgba(56,189,248,0.25), transparent 70%)' }} />
    </div>
  );
}
