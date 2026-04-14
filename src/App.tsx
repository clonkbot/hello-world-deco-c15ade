import { useEffect, useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated sunburst rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-[200vh] w-[2px] bg-gradient-to-t from-transparent via-[#d4af37]/20 to-transparent origin-center"
            style={{
              transform: `rotate(${i * 15}deg)`,
              animation: `pulse 4s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative corner frames */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 w-16 h-16 md:w-24 md:h-24 border-l-2 border-t-2 border-[#d4af37]/60" />
      <div className="absolute top-6 right-6 md:top-12 md:right-12 w-16 h-16 md:w-24 md:h-24 border-r-2 border-t-2 border-[#d4af37]/60" />
      <div className="absolute bottom-16 left-6 md:bottom-20 md:left-12 w-16 h-16 md:w-24 md:h-24 border-l-2 border-b-2 border-[#d4af37]/60" />
      <div className="absolute bottom-16 right-6 md:bottom-20 md:right-12 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-[#d4af37]/60" />

      {/* Main content */}
      <main className="relative z-10 text-center px-6">
        {/* Decorative top line */}
        <div
          className={`flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="w-2 h-2 md:w-3 md:h-3 rotate-45 border border-[#d4af37]" />
          <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Hello */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] md:tracking-[0.2em] text-[#faf8f0] mb-2 md:mb-4 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow: '0 0 60px rgba(212, 175, 55, 0.3), 0 4px 12px rgba(0,0,0,0.5)',
          }}
        >
          HELLO
        </h1>

        {/* World */}
        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.3em] md:tracking-[0.5em] text-[#d4af37] transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          WORLD
        </h2>

        {/* Decorative bottom element */}
        <div
          className={`flex items-center justify-center gap-2 mt-8 md:mt-12 transition-all duration-1000 delay-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d4af37] rotate-45" />
          <div className="w-6 md:w-12 h-[1px] bg-[#d4af37]/60" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d4af37] rotate-45" />
          <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60" />
        </div>

        {/* Subtitle */}
        <p
          className={`font-body text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-[#faf8f0]/40 mt-6 md:mt-8 uppercase transition-all duration-1000 delay-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          React + TypeScript
        </p>
      </main>

      {/* Animated geometric accent - left */}
      <div
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#d4af37]/60 rotate-45"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Animated geometric accent - right */}
      <div
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#d4af37]/60 rotate-45"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Footer */}
      <footer
        className={`absolute bottom-4 md:bottom-6 left-0 right-0 text-center transition-all duration-1000 delay-1200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="font-body text-[10px] md:text-xs tracking-[0.15em] text-[#faf8f0]/25">
          Requested by @PauliusX · Built by @clonkbot
        </p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}

export default App;
