type Destination = {
  readonly flag: string;
  readonly name: string;
  readonly detail: string;
};

type CorridorGroup = {
  readonly from: { readonly flag: string; readonly label: string };
  readonly destinations: readonly Destination[];
};

const CORRIDORS: readonly CorridorGroup[] = [
  {
    from: { flag: '🇺🇸', label: 'From United States →' },
    destinations: [
      { flag: '🇳🇬', name: 'Nigeria', detail: 'From $1.99 · Instant' },
      { flag: '🇬🇭', name: 'Ghana', detail: 'From $1.99 · Fast' },
      { flag: '🇰🇪', name: 'Kenya', detail: 'From $1.99 · M-Pesa' },
      { flag: '🇨🇳', name: 'China', detail: 'From $2.49 · Alipay' },
      { flag: '🇮🇳', name: 'India', detail: 'From $1.49 · UPI' },
      { flag: '🇵🇭', name: 'Philippines', detail: 'From $1.99 · GCash' },
    ],
  },
  {
    from: { flag: '🇬🇧', label: 'From United Kingdom →' },
    destinations: [
      { flag: '🇿🇦', name: 'South Africa', detail: 'From £1.49 · Instant' },
      { flag: '🇪🇹', name: 'Ethiopia', detail: 'From £1.99 · Fast' },
      { flag: '🇺🇬', name: 'Uganda', detail: 'From £1.99 · MTN' },
      { flag: '🇧🇩', name: 'Bangladesh', detail: 'From £1.49 · bKash' },
      { flag: '🇵🇰', name: 'Pakistan', detail: 'From £1.49 · Jazz' },
      { flag: '🇯🇲', name: 'Jamaica', detail: 'From £1.99 · Instant' },
    ],
  },
  {
    from: { flag: '🇨🇦', label: 'From Canada →' },
    destinations: [
      { flag: '🇨🇲', name: 'Cameroon', detail: 'From CA$2.49' },
      { flag: '🇨🇩', name: 'DR Congo', detail: 'From CA$2.49' },
      { flag: '🇸🇳', name: 'Senegal', detail: 'From CA$1.99 · Wave' },
      { flag: '🇲🇽', name: 'Mexico', detail: 'From CA$1.49' },
      { flag: '🇻🇳', name: 'Vietnam', detail: 'From CA$2.49' },
      { flag: '🇭🇹', name: 'Haiti', detail: 'From CA$2.49' },
    ],
  },
] as const;

export function Corridors() {
  return (
    <section id="corridors" className="py-16 lg:py-24" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: 'var(--text)' }}>
            Send to 150+ Countries
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--text3)' }}>
            Popular corridors with the best rates and fastest delivery
          </p>
        </div>

        {/* Corridor groups */}
        <div className="flex flex-col gap-10">
          {CORRIDORS.map((group) => (
            <div key={group.from.label}>
              {/* From label */}
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ background: 'var(--badge-bg)', color: 'var(--text2)', border: '1px solid var(--border)' }}
              >
                <span>{group.from.flag}</span>
                <span>{group.from.label}</span>
              </div>

              {/* Destination cards */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {group.destinations.map((dest) => (
                  <div
                    key={dest.name}
                    className="flex flex-col items-center gap-2 rounded-xl p-4 text-center transition-shadow hover:shadow-lg cursor-pointer"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <span className="text-3xl">{dest.flag}</span>
                    <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{dest.name}</span>
                    <span className="text-xs" style={{ color: 'var(--text3)' }}>{dest.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
