import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // For this portfolio skeleton, we just simulate
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold md:text-4xl">Collaborate</h2>
      <p className="mt-2 text-neutral-400">Building something cool? Let’s talk.</p>

      <form onSubmit={onSubmit} className="mt-8 rounded-xl border border-white/10 bg-neutral-950/70 p-6">
        <TerminalInput
          label="> Name"
          value={form.name}
          onChange={(v) => setForm((s) => ({ ...s, name: v }))}
        />
        <TerminalInput
          label="> Email"
          value={form.email}
          onChange={(v) => setForm((s) => ({ ...s, email: v }))}
        />
        <TerminalInput
          label="> Message"
          textarea
          value={form.message}
          onChange={(v) => setForm((s) => ({ ...s, message: v }))}
        />
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-teal-500 px-4 py-2 font-medium text-white transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {status === 'idle' && 'Send'}
          {status === 'sending' && 'Sending…'}
          {status === 'sent' && 'Sent!'}
        </button>
      </form>
    </section>
  );
}

function TerminalInput({ label, value, onChange, textarea }) {
  const base = 'w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 font-mono text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50';
  return (
    <label className="mb-3 block">
      <span className="mb-1 block font-mono text-xs tracking-wider text-neutral-400">{label}</span>
      {textarea ? (
        <textarea
          rows={5}
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="> Your message here"
        />
      ) : (
        <input
          className={base}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="> vidit"
        />
      )}
    </label>
  );
}
