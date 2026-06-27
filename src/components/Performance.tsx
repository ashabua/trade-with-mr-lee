import { useEffect, useRef } from 'react';
import { BarChart2, Lock, TrendingUp, Zap } from 'lucide-react';
import { useRevealChildren } from '../hooks/useReveal';

const approaches = [
  {
    icon: BarChart2,
    title: 'Technical Analysis',
    desc: 'Multi-timeframe analysis using proven technical tools to identify high-probability setups and trend confluences.',
    metric: '85%',
    metricLabel: 'Setup Accuracy',
  },
  {
    icon: Lock,
    title: 'Strict Risk Management',
    desc: 'Maximum 1-2% risk per trade with defined stop-loss levels. Capital preservation is always the first objective.',
    metric: '≤2%',
    metricLabel: 'Risk Per Trade',
  },
  {
    icon: TrendingUp,
    title: 'Capital Preservation',
    desc: 'Conservative drawdown targets ensure the portfolio stays healthy through volatile market conditions.',
    metric: '<5%',
    metricLabel: 'Max Drawdown',
  },
  {
    icon: Zap,
    title: 'Consistent Execution',
    desc: 'A systematic, rules-based approach eliminates emotional trading and ensures disciplined, repeatable results.',
    metric: '73%',
    metricLabel: 'Win Rate',
  },
];

const perfData = [
  { month: 'Jan', val: 62 },
  { month: 'Feb', val: 71 },
  { month: 'Mar', val: 58 },
  { month: 'Apr', val: 80 },
  { month: 'May', val: 74 },
  { month: 'Jun', val: 88 },
];

function PerformanceBars() {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const bars = container.querySelectorAll<HTMLElement>('.perf-bar');
          bars.forEach((bar) => {
            const target = bar.getAttribute('data-width') || '0';
            bar.style.width = '0%';
            requestAnimationFrame(() => {
              setTimeout(() => {
                bar.style.width = target;
              }, 100);
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-5">
      {perfData.map((item) => (
        <div key={item.month}>
          <div className="flex justify-between text-xs mb-2" style={{ color: 'rgba(248,250,252,0.5)' }}>
            <span>{item.month}</span>
            <span style={{ color: '#f0c040' }}>+{item.val - 50}%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="perf-bar h-full rounded-full"
              data-width={`${item.val}%`}
              style={{ width: '0%', transition: 'width 1.5s ease' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Performance() {
  const containerRef = useRevealChildren();

  return (
    <section id="performance" className="py-24 lg:py-32 relative" style={{ background: '#020817' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(180deg, rgba(212,160,23,0.3), transparent)' }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
              Strategy
            </span>
            <div className="w-8 h-px" style={{ background: '#d4a017' }} />
          </div>
          <h2
            className="reveal text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Trading <span className="gold-shimmer">Approach</span>
          </h2>
          <p className="reveal text-base max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.55)' }}>
            A structured, disciplined methodology that prioritises capital preservation and consistent returns.
          </p>
        </div>

        {/* Approach cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {approaches.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal premium-card rounded-2xl p-6 group flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(212,160,23,0.1)',
                      border: '1px solid rgba(212,160,23,0.25)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#d4a017' }} />
                  </div>
                  <div className="text-right">
                    <div className="stat-number text-2xl font-bold">{item.metric}</div>
                    <div className="text-xs" style={{ color: 'rgba(248,250,252,0.35)' }}>
                      {item.metricLabel}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-base font-bold text-white mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(248,250,252,0.5)' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Performance visualization */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal premium-card rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Monthly Performance Snapshot
            </h3>
            <p className="text-sm mb-8" style={{ color: 'rgba(248,250,252,0.45)' }}>
              Illustrative relative performance across recent months
            </p>
            <PerformanceBars />
          </div>

          <div className="reveal premium-card rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Risk Profile Summary
              </h3>
              <p className="text-sm mb-8" style={{ color: 'rgba(248,250,252,0.45)' }}>
                Built for stability, not speculation
              </p>
            </div>

            <div className="space-y-5">
              {[
                { label: 'Capital Safety', value: 97 },
                { label: 'Trade Discipline', value: 94 },
                { label: 'Strategy Consistency', value: 91 },
                { label: 'Investor Communication', value: 98 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{ color: 'rgba(248,250,252,0.65)' }}>{item.label}</span>
                    <span style={{ color: '#f0c040' }}>{item.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="h-full rounded-full perf-bar"
                      data-width={`${item.value}%`}
                      style={{ width: `${item.value}%`, background: 'linear-gradient(90deg, #d4a017, #f0c040)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
