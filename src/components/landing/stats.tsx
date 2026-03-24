const STATS = [
  { value: '150+', label: 'Countries' },
  { value: '$2B+', label: 'Transfers' },
  { value: '250K+', label: 'Customers' },
  { value: '4 min', label: 'Avg Delivery' },
  { value: '99.9%', label: 'Uptime' },
] as const;

export function Stats() {
  return (
    <section style={{ background: 'var(--stat-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span
                style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p300))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                className="font-heading text-2xl font-bold"
              >
                {stat.value}
              </span>
              <span style={{ color: 'var(--text3)' }} className="text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
