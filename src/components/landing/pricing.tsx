type PricingTier = {
  readonly name: string;
  readonly price: string;
  readonly period: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly cta: string;
  readonly featured: boolean;
};

const PRICING_TIERS: readonly PricingTier[] = [
  {
    name: 'Basic',
    price: 'Free',
    period: '',
    description: 'Perfect for occasional senders',
    features: [
      'Up to $500/month',
      'Transfers from $1.99',
      'Email support',
      'Bank & mobile money',
      '150+ countries',
    ],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'For regular senders who want the best rates',
    features: [
      'Up to $5,000/month',
      'Transfers from $0.99',
      'Priority 24/7 support',
      'Batch transfers',
      'Rate alerts',
      'All Basic features',
    ],
    cta: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '$49',
    period: '/month',
    description: 'For businesses and high-volume senders',
    features: [
      'Unlimited transfers',
      'Lowest possible rates',
      'Dedicated account manager',
      'API access',
      'Multi-user access',
      'All Pro features',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
] as const;

const FEATURED_CARD_STYLES = {
  card: {
    background: 'linear-gradient(135deg, var(--color-p500), var(--color-p600))',
    border: 'none',
    boxShadow: '0 8px 40px rgba(124,34,200,0.35)',
  },
  heading: { color: '#fff' },
  price: { color: '#fff' },
  period: { color: 'rgba(255,255,255,0.7)' },
  description: { color: 'rgba(255,255,255,0.8)' },
  featureItem: { color: 'rgba(255,255,255,0.9)' },
  checkmark: { color: '#a5f3d0' },
  cta: { background: '#fff', color: 'var(--color-p500)' },
} as const;

const DEFAULT_CARD_STYLES = {
  card: {
    background: 'var(--card)',
    border: '1px solid var(--border)',
    boxShadow: undefined,
  },
  heading: { color: 'var(--text)' },
  price: { color: 'var(--text)' },
  period: { color: 'var(--text3)' },
  description: { color: 'var(--text3)' },
  featureItem: { color: 'var(--text2)' },
  checkmark: { color: 'var(--color-mint)' },
  cta: { background: 'var(--badge-bg)', border: '1px solid var(--border)', color: 'var(--text2)' },
} as const;

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24" style={{ background: 'var(--surface)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text3)' }}>
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => {
            const s = tier.featured ? FEATURED_CARD_STYLES : DEFAULT_CARD_STYLES;
            return (
              <div
                key={tier.name}
                className="relative flex flex-col gap-6 rounded-2xl p-6"
                style={s.card}
              >
                {/* Popular badge */}
                {tier.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{ background: 'var(--color-gold)', color: '#fff' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Name & price */}
                <div>
                  <h3 className="font-heading text-xl font-bold" style={s.heading}>
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="font-heading text-4xl font-bold" style={s.price}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="mb-1 text-sm" style={s.period}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm" style={s.description}>
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm" style={s.featureItem}>
                      <span style={s.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/auth/register"
                  className="mt-auto block rounded-full py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90"
                  style={s.cta}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
