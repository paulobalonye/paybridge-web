import Link from 'next/link';

const GLOW_PURPLE = 'rgba(124,34,200,0.18)';
const GLOW_MINT = 'rgba(0,184,153,0.12)';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: `radial-gradient(ellipse at center, ${GLOW_PURPLE} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '5%',
          width: '500px',
          height: '400px',
          background: `radial-gradient(ellipse at center, ${GLOW_MINT} 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--border)', color: 'var(--text2)' }}>
              <span>🌍</span>
              <span>Trusted by 250,000+ senders worldwide</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--text)' }}>
              Bridge the Gap.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-p500), var(--color-p300), var(--color-mint))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Send Money
              </span>{' '}
              Everywhere.
            </h1>

            {/* Sub */}
            <p className="max-w-lg text-lg leading-relaxed" style={{ color: 'var(--text2)' }}>
              Fast, low-fee international transfers to Africa, Asia, Latin America and beyond. Send in seconds, arrive in minutes — from as little as $1.49.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/register"
                style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p600))', color: '#fff' }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-lg transition-opacity hover:opacity-90"
              >
                Start Sending →
              </Link>
              <a
                href="#how"
                style={{ border: '2px solid var(--border)', color: 'var(--text2)', background: 'transparent' }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all hover:opacity-80"
              >
                How it Works
              </a>
            </div>
          </div>

          {/* Right: transfer card preview */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Card */}
            <div
              className="relative w-full max-w-sm rounded-2xl p-6 shadow-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'var(--text3)' }}>Send Money</span>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ background: 'rgba(0,184,153,0.12)', color: 'var(--color-mint)' }}>Live Rate</span>
              </div>

              {/* Amount input mock */}
              <div className="mb-3 rounded-xl p-4" style={{ background: 'var(--input-bg)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-medium mb-1" style={{ color: 'var(--text3)' }}>You send</div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl font-bold" style={{ color: 'var(--text)' }}>$500</span>
                  <span className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold" style={{ background: 'var(--badge-bg)', color: 'var(--text2)' }}>
                    🇺🇸 USD
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="my-2 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p400))' }}>
                  ↓
                </div>
              </div>

              {/* Recipient mock */}
              <div className="mb-4 rounded-xl p-4" style={{ background: 'var(--input-bg)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-medium mb-1" style={{ color: 'var(--text3)' }}>Recipient gets</div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl font-bold" style={{ color: 'var(--color-mint)' }}>₦812,450</span>
                  <span className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold" style={{ background: 'var(--badge-bg)', color: 'var(--text2)' }}>
                    🇳🇬 NGN
                  </span>
                </div>
              </div>

              {/* Fee row */}
              <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm" style={{ background: 'var(--stat-bg)' }}>
                <span style={{ color: 'var(--text3)' }}>Fee: <strong style={{ color: 'var(--text2)' }}>$1.99</strong></span>
                <span style={{ color: 'var(--text3)' }}>Rate: <strong style={{ color: 'var(--text2)' }}>1 USD = 1,624.90 NGN</strong></span>
              </div>
            </div>

            {/* Floating notification badge */}
            <div
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span className="text-lg">✅</span>
              <div>
                <div className="text-xs font-bold" style={{ color: 'var(--text)' }}>Transfer Complete</div>
                <div className="text-xs" style={{ color: 'var(--text3)' }}>Delivered in 3 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
