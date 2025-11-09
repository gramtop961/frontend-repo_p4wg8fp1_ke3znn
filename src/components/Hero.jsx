import { useEffect, useMemo, useState } from 'react';
import { Github, Linkedin, Mail, FileText, GraduationCap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const words = [
  'systems',
  'platforms',
  'models',
  'features',
  'tools',
  'things that actually ship',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const current = useMemo(() => words[index], [index]);

  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-widest text-teal-300/80">PORTFOLIO · PRODUCT ENGINEERING · AI</p>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">Vidit Khazanchi</span>
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-base text-neutral-300 sm:text-lg">
          I build intelligent <span className="text-white">{current}</span> — blending ML motion with strong software fundamentals.
        </p>

        {/* Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <HeroLink href="https://drive.google.com" icon={FileText} label="Resume" />
          <HeroLink href="https://github.com/viditkhazanchi" icon={Github} label="GitHub" />
          <HeroLink href="https://www.linkedin.com/in/viditkhazanchi" icon={Linkedin} label="LinkedIn" />
          <HeroLink href="mailto:vidit.khazanchi@gmail.com" icon={Mail} label="Email" />
          <HeroLink href="https://scholar.google.com" icon={GraduationCap} label="Scholar" />
        </div>
      </div>
    </section>
  );
}

function HeroLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-teal-300/40 hover:bg-white/10"
    >
      <Icon className="h-4 w-4 text-teal-300 transition-transform group-hover:-translate-y-0.5" />
      <span>{label}</span>
      <span className="ml-1 inline-block h-1 w-1 rounded-full bg-teal-300/70 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}
