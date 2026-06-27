import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const CHART_POINTS = [40, 55, 45, 65, 58, 72, 68, 80, 74, 88, 82, 95];

function MiniChart() {
  const w = 280;
  const h = 80;
  const max = Math.max(...CHART_POINTS);
  const min = Math.min(...CHART_POINTS);
  const range = max - min;
  const pts = CHART_POINTS.map((v, i) => {
    const x = (i / (CHART_POINTS.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 10) - 5;
    return `${x},${y}`;
  }).join(' ');
  const areaPath = `M 0,${h} L ${pts.split(' ').map(p => p).join(' L ')} L ${w},${h} Z`;
  const linePath = `M ${pts.split(' ').join(' L ')}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a017" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4a017" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGrad)" />
      <path d={linePath} fill="none" stroke="#d4a017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center hero-grid overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0a1628 50%, #020817 100%)' }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Left glow */}
      <div
        className="absolute left-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                borderColor: 'rgba(212,160,23,0.3)',
                background: 'rgba(212,160,23,0.07)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
                Accepting New Investors
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-4 transition-all duration-700 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="text-white">Trade With</span>
              <br />
              <span className="gold-shimmer">Mr Lee</span>
            </h1>

            <p
              className={`text-lg sm:text-xl font-light tracking-widest uppercase mb-6 transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ color: 'rgba(248,250,252,0.45)', letterSpacing: '0.25em' }}
            >
              Precision &bull; Discipline &bull; Consistency
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ color: 'rgba(248,250,252,0.65)' }}
            >
              Partner with a disciplined forex trader focused on risk management, consistency,
              and long-term growth. Your capital. Our expertise. Mutual success.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-wide shadow-lg"
              >
                Become an Investor
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm"
              >
                Contact Me
              </button>
            </div>

            {/* Stats row */}
            <div
              className={`grid grid-cols-3 gap-4 mt-14 pt-8 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ borderTop: '1px solid rgba(212,160,23,0.15)' }}
            >
              {[
                { value: '5+', label: 'Years Trading' },
                { value: '98%', label: 'Risk-Managed' },
                { value: '24/7', label: 'Market Focus' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="stat-number text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(248,250,252,0.45)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative trading card */}
          <div
            className={`hidden lg:flex flex-col gap-4 transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="premium-card rounded-2xl p-6 animate-float">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'rgba(248,250,252,0.4)' }}>
                    Portfolio Performance
                  </div>
                  <div className="stat-number text-4xl font-bold">+34.7%</div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80' }}
                >
                  YTD
                </div>
              </div>
              <div className="h-20">
                <MiniChart />
              </div>
              <div className="flex justify-between mt-4 text-xs" style={{ color: 'rgba(248,250,252,0.4)' }}>
                <span>Jan 2026</span>
                <span>Current</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Win Rate', value: '73%', change: '+2.1%' },
                { label: 'Avg RR', value: '1:3.2', change: 'Risk/Reward' },
                { label: 'Max Drawdown', value: '4.2%', change: 'Controlled' },
                { label: 'Investors', value: '40+', change: 'Trusted' },
              ].map((item) => (
                <div key={item.label} className="premium-card rounded-xl p-4">
                  <div className="text-xs mb-2" style={{ color: 'rgba(248,250,252,0.4)' }}>
                    {item.label}
                  </div>
                  <div className="stat-number text-2xl font-bold">{item.value}</div>
                  <div className="text-xs mt-1 text-green-400">{item.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(248,250,252,0.3)' }}>
          Scroll
        </span>
        <ChevronDown size={20} style={{ color: 'rgba(212,160,23,0.5)' }} />
      </button>
    </section>
  );
}
