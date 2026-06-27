import { Star } from 'lucide-react';
import { useRevealChildren } from '../hooks/useReveal';

const testimonials = [
  {
    name: 'Michael T.',
    role: 'Private Investor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "Mr Lee's disciplined approach gave me the confidence to invest. The transparency and communication have been outstanding from day one. My capital has grown consistently.",
    stars: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "I was skeptical at first, but the detailed reporting and honest communication won me over. The risk management focus is exactly what I needed as a conservative investor.",
    stars: 5,
  },
  {
    name: 'David K.',
    role: 'Long-Term Investor',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "What sets Mr Lee apart is the consistency. No wild promises, no reckless trades — just a steady, rule-based strategy that protects capital and grows it over time.",
    stars: 5,
  },
  {
    name: 'Thabo N.',
    role: 'Portfolio Investor',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "The professionalism is unmatched. Monthly reports, open communication, and a trading strategy I can actually understand. I feel like a true partner, not just a client.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-current star-gold" style={{ color: '#f0c040' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRevealChildren();

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative" style={{ background: '#0a1628' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, rgba(212,160,23,0.3), transparent)' }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
              Testimonials
            </span>
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
          </div>
          <h2
            className="reveal text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What <span className="gold-shimmer">Investors Say</span>
          </h2>
          <p className="reveal text-base max-w-lg mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Real feedback from investors who have partnered with Mr Lee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal testimonial-card rounded-2xl p-6 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Quote mark */}
              <div className="quote-mark mb-2">&ldquo;</div>

              <p
                className="text-sm leading-relaxed flex-1 mb-6"
                style={{ color: 'rgba(248,250,252,0.68)' }}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(212,160,23,0.1)' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: '1.5px solid rgba(212,160,23,0.35)' }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold truncate">{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(248,250,252,0.4)' }}>
                    {t.role}
                  </div>
                </div>
                <StarRating count={t.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className="reveal mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12"
          style={{ borderTop: '1px solid rgba(212,160,23,0.1)' }}
        >
          {[
            { value: '40+', label: 'Active Investors' },
            { value: '5★', label: 'Average Rating' },
            { value: '100%', label: 'Transparent' },
            { value: '2019', label: 'Trading Since' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="stat-number text-4xl font-bold mb-1">{item.value}</div>
              <div className="text-xs tracking-wide uppercase" style={{ color: 'rgba(248,250,252,0.4)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
