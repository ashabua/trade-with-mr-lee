import { ArrowRight, Users, Lightbulb } from 'lucide-react';
import { useRevealChildren } from '../hooks/useReveal';

export default function InvestorPartnership() {
  const containerRef = useRevealChildren();

  const handleContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0a1628' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,160,23,0.05) 0%, transparent 70%)',
        }}
      />

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ background: '#d4a017' }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
            Partnership
          </span>
          <div className="w-8 h-px" style={{ background: '#d4a017' }} />
        </div>

        <h2
          className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Need <span className="gold-shimmer">Investors</span>
        </h2>

        <p
          className="reveal text-xl sm:text-2xl font-light mb-5"
          style={{ color: 'rgba(248,250,252,0.6)', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
        >
          "I have the skill, you have the capital."
        </p>

        <p
          className="reveal text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'rgba(248,250,252,0.6)' }}
        >
          Let's build something together. Whether you're looking to diversify your portfolio or grow
          your savings through professional forex trading, I offer a structured, transparent, and
          results-focused investor partnership.
        </p>

        {/* Feature highlights */}
        <div className="reveal grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12">
          {[
            {
              icon: Users,
              title: 'Flexible Partnership',
              desc: 'Customised arrangements to suit your investment goals and risk profile.',
            },
            {
              icon: Lightbulb,
              title: 'Skill Meets Capital',
              desc: 'You provide the capital; I provide the expertise, strategy, and execution.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="premium-card rounded-xl p-5 text-left flex gap-4 items-start"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(212,160,23,0.12)', border: '1px solid rgba(212,160,23,0.25)' }}
                >
                  <Icon size={18} style={{ color: '#d4a017' }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(248,250,252,0.5)' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleContact}
            className="btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-sm font-bold tracking-wide shadow-xl"
          >
            Start Your Investment Journey
            <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.link/hlvpe5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
