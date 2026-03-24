type Step = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

const STEPS: readonly Step[] = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up in under 2 minutes. Verify your identity with a government ID and you\'re ready to go.',
  },
  {
    number: '02',
    title: 'Add Recipient',
    description: 'Enter your recipient\'s details — bank account, mobile wallet, or cash pickup location.',
  },
  {
    number: '03',
    title: 'Send & Track',
    description: 'Choose your amount, confirm the rate and fees, then send. Track your transfer in real time.',
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="py-16 lg:py-24" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            How It Works
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text3)' }}>
            Send money abroad in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-1/6 hidden md:block"
            style={{
              width: '66%',
              height: '2px',
              background: 'linear-gradient(90deg, var(--color-p500), var(--color-mint))',
              opacity: 0.25,
              left: '16.66%',
            }}
          />

          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center gap-4 text-center">
              {/* Number circle */}
              <div
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full font-heading text-2xl font-bold text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p400))' }}
              >
                {step.number}
              </div>

              <h3 className="font-heading text-xl font-bold" style={{ color: 'var(--text)' }}>
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
