import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950/80 py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="font-mono text-sm text-neutral-300">
            <p>$ whoami</p>
            <p>→ Vidit Khazanchi</p>
            <p className="mt-2">$ system status: active</p>
          </div>
          <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} — Built with care, coffee, and a healthy respect for segfaults.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
