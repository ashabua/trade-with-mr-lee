import { useState } from 'react';
import { Mail, MessageCircle, Facebook, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useRevealChildren } from '../hooks/useReveal';

const WHATSAPP_LINK = 'https://wa.link/hlvpe5';
const EMAIL = 'ashabuaisrael2019@gmail.com';
const FACEBOOK_URL = 'https://facebook.com/tradewithmrlee';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const containerRef = useRevealChildren();
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', amount: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative"
      style={{ background: '#020817' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, rgba(212,160,23,0.3), transparent)' }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,160,23,0.04) 0%, transparent 70%)',
        }}
      />

      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
              Get In Touch
            </span>
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
          </div>
          <h2
            className="reveal text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start Your <span className="gold-shimmer">Journey</span>
          </h2>
          <p className="reveal text-base max-w-lg mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Ready to invest? Reach out via your preferred channel and we'll arrange a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div>
            <div className="reveal space-y-5 mb-10">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+27 000 000 0000',
                  href: WHATSAPP_LINK,
                  color: '#25d366',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                  color: '#d4a017',
                },
                {
                  icon: Facebook,
                  label: 'Facebook',
                  value: 'Trade With Mr Lee',
                  href: FACEBOOK_URL,
                  color: '#1877f2',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="premium-card flex items-center gap-4 rounded-xl p-5 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                    >
                      <Icon size={20} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(248,250,252,0.4)' }}>
                        {item.label}
                      </div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability notice */}
            <div
              className="reveal premium-card rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-white">Currently Accepting Investors</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(248,250,252,0.5)' }}>
                Limited investor slots are available. Contact now to secure your spot and schedule a consultation call.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="reveal">
            <div className="premium-card rounded-2xl p-7 sm:p-8">
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}
                  >
                    <CheckCircle size={30} className="text-green-400" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(248,250,252,0.55)' }}>
                    Thank you for reaching out. Mr Lee will be in contact with you shortly.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', email: '', phone: '', amount: '', message: '' }); }}
                    className="btn-outline mt-6 px-6 py-3 rounded-xl text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@email.com"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
                        WhatsApp / Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+27 000 000 0000"
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
                        Investment Range
                      </label>
                      <select
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl text-sm appearance-none"
                      >
                        <option value="">Select range</option>
                        <option value="1k-5k">R1,000 – R5,000</option>
                        <option value="5k-20k">R5,000 – R20,000</option>
                        <option value="20k-50k">R20,000 – R50,000</option>
                        <option value="50k+">R50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your investment goals..."
                      className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                  </div>

                  {formState === 'error' && (
                    <div
                      className="flex items-center gap-2 p-3 rounded-lg text-sm"
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5' }}
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or contact via WhatsApp.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="btn-gold w-full py-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formState === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'rgba(248,250,252,0.3)' }}>
                    Your information is confidential and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
