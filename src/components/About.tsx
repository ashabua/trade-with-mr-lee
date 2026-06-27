import { Shield, Target, Eye, Award } from 'lucide-react';
import { useRevealChildren } from '../hooks/useReveal';
import mrLeePhoto from '../assets/mr-lee.jpg';

const features = [
  {
    icon: Shield,
    title: 'Risk Management',
    desc: 'Capital protection is the top priority. Every trade follows strict position sizing and stop-loss rules.',
  },
  {
    icon: Target,
    title: 'Consistent Strategy',
    desc: 'Rule-based trading approach with unwavering discipline — no emotional decisions, only structured execution.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Clear communication and detailed performance reporting so investors are always informed.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    desc: 'Committed to excellence, accountability, and building lasting investor relationships.',
  },
];

export default function About() {
  const containerRef = useRevealChildren();

  return (
    <section id="about" className="py-24 lg:py-32 relative" style={{ background: '#020817' }}>
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, rgba(212,160,23,0.3), transparent)' }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
              About
            </span>
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
          </div>
          <h2
            className="reveal text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Who Is <span className="gold-shimmer">Mr Lee?</span>
          </h2>
          <div className="section-divider mb-8" />
        </div>

        {/* About content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: image + badge */}
          <div className="reveal-left flex flex-col items-center lg:items-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Outer gold ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid rgba(212,160,23,0.2)', transform: 'scale(1.08)' }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid rgba(212,160,23,0.1)', transform: 'scale(1.16)' }}
              />
              <img
                src={mrLeePhoto}
                alt="Mr Lee - Forex Trader"
                className="w-full h-full object-cover rounded-full"
                style={{ border: '3px solid rgba(212,160,23,0.4)' }}
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 premium-card rounded-xl px-4 py-3 text-center shadow-xl"
              >
                <div className="stat-number text-2xl font-bold">5+</div>
                <div className="text-xs" style={{ color: 'rgba(248,250,252,0.5)' }}>Years Expert</div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p
              className="reveal text-lg leading-relaxed mb-6"
              style={{ color: 'rgba(248,250,252,0.7)' }}
            >
              Mr Lee is a disciplined forex trader with a proven focus on{' '}
              <span style={{ color: '#d4a017' }}>capital preservation</span>,{' '}
              <span style={{ color: '#d4a017' }}>strategic risk management</span>, and consistent market
              performance across varying market conditions.
            </p>
            <p
              className="reveal text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(248,250,252,0.7)' }}
            >
              The goal is to build long-term investor relationships grounded in{' '}
              <span style={{ color: '#d4a017' }}>transparency</span>, trust, and professionalism —
              where both the trader and the investor win together.
            </p>

            {/* Credential list */}
            <div className="reveal space-y-3">
              {[
                'Specialises in major and minor forex pairs',
                'Rule-based system with defined risk per trade',
                'Detailed monthly performance reporting',
                'Open communication with all investors',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.4)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(248,250,252,0.65)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Invest Cards */}
        <div id="why-invest">
          <div className="text-center mb-12">
            <div className="reveal inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#d4a017' }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
                Value Proposition
              </span>
              <div className="w-8 h-px" style={{ background: '#d4a017' }} />
            </div>
            <h2
              className="reveal text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Why Invest <span className="gold-shimmer">With Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="reveal premium-card rounded-2xl p-6 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(212,160,23,0.1)',
                      border: '1px solid rgba(212,160,23,0.25)',
                    }}
                  >
                    <Icon size={22} style={{ color: '#d4a017' }} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.55)' }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
