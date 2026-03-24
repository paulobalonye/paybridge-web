type Testimonial = {
  readonly initials: string;
  readonly name: string;
  readonly location: string;
  readonly stars: number;
  readonly quote: string;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    initials: 'AO',
    name: 'Adaeze Okonkwo',
    location: 'Houston, TX → Nigeria',
    stars: 5,
    quote: 'I\'ve tried many services but PayBridge is by far the best. My mum gets the money in minutes and the rates are incredible. I save over $20 a month compared to my old provider.',
  },
  {
    initials: 'RK',
    name: 'Rajesh Kumar',
    location: 'London, UK → India',
    stars: 5,
    quote: 'UPI delivery is seamless. I send money to my family every week and it always arrives instantly. The app is so clean and easy to use. Highly recommended.',
  },
  {
    initials: 'MS',
    name: 'Marie-Claire Souza',
    location: 'Toronto, CA → Haiti',
    stars: 5,
    quote: 'Finally a service that actually serves Haiti with reasonable fees. The customer support is also fantastic — they helped me set up my first transfer in minutes.',
  },
] as const;

function StarRating({ count }: { readonly count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={`star-${i}`} style={{ color: 'var(--color-gold)' }}>★</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Loved by Senders Worldwide
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text3)' }}>
            Join 250,000+ customers who trust PayBridge
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed" style={{ color: 'var(--text2)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p400))' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text3)' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
