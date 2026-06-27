import { TrendingUp, Mail, MessageCircle, Facebook, ArrowUp } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.link/hlvpe5';
const EMAIL = 'ashabuaisrael2019@gmail.com';
const FACEBOOK_URL = 'https://facebook.com/tradewithmrlee';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#why-invest', label: 'Why Invest' },
  { href: '#performance', label: 'Performance' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: '#020817', borderTop: '1px solid rgba(212,160,23,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #d4a017, #f0c040)' }}
              >
                <TrendingUp size={18} style={{ color: '#020817' }} />
              </div>
              <div className="leading-tight">
                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Trade With
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
                  Mr Lee
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(248,250,252,0.45)' }}>
              Precision. Discipline. Consistency. Professional forex trading focused on capital
              preservation and long-term investor relationships.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: WHATSAPP_LINK, color: '#25d366', label: 'WhatsApp' },
                { icon: Mail, href: `mailto:${EMAIL}`, color: '#d4a017', label: 'Email' },
                { icon: Facebook, href: FACEBOOK_URL, color: '#1877f2', label: 'Facebook' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}25`,
                    }}
                  >
                    <Icon size={16} style={{ color: s.color }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm transition-colors duration-200 hover:text-yellow-400"
                    style={{ color: 'rgba(248,250,252,0.45)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Investor Partnerships',
                'Capital Management',
                'Forex Trading',
                'Portfolio Growth',
                'Risk Consulting',
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm" style={{ color: 'rgba(248,250,252,0.45)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-green-400"
                  style={{ color: 'rgba(248,250,252,0.45)' }}
                >
                  WhatsApp: +27 000 000 0000
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: 'rgba(248,250,252,0.45)' }}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-blue-400"
                  style={{ color: 'rgba(248,250,252,0.45)' }}
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(212,160,23,0.1)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(248,250,252,0.3)' }}>
            &copy; 2026 Trade With Mr Lee. All rights reserved.
          </p>
          <p className="text-xs text-center" style={{ color: 'rgba(248,250,252,0.2)' }}>
            Forex trading involves risk. Past performance does not guarantee future results.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.25)' }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} style={{ color: '#d4a017' }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
