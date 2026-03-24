type Feature = {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
};

const FEATURES: readonly Feature[] = [
  {
    icon: '⚡',
    title: 'Instant Transfers',
    description: 'Send money in seconds. Most transfers arrive within 4 minutes, 24/7.',
  },
  {
    icon: '🔐',
    title: 'Bank-Grade Security',
    description: 'Your money and data are protected with 256-bit encryption and 2FA.',
  },
  {
    icon: '💸',
    title: 'Lowest Fees',
    description: 'Transparent fees from just $1.49. No hidden charges, ever.',
  },
  {
    icon: '📱',
    title: 'Mobile Money',
    description: 'Send directly to M-Pesa, MTN, Airtel, GCash, bKash and more.',
  },
  {
    icon: '💱',
    title: 'Live Exchange Rates',
    description: 'Get the best mid-market rate updated every minute.',
  },
  {
    icon: '🌍',
    title: '150+ Countries',
    description: 'The widest coverage across Africa, Asia, Latin America and beyond.',
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24" style={{ background: 'var(--surface)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Why Choose PayBridge?
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text3)' }}>
            Built for speed, security and simplicity
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-lg"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ background: 'var(--badge-bg)' }}
              >
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-bold" style={{ color: 'var(--text)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
