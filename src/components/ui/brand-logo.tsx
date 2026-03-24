import Link from 'next/link';

const LOGO_PAY_STYLE = {
  background: 'linear-gradient(135deg, var(--color-p500), var(--color-p300))',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text' as const,
};

const LOGO_BRIDGE_STYLE = {
  background: 'linear-gradient(135deg, var(--color-mint), #00d4b0)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text' as const,
};

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-0.5 font-heading text-xl font-bold select-none">
      <span style={LOGO_PAY_STYLE}>Pay</span>
      <span style={LOGO_BRIDGE_STYLE}>Bridge</span>
    </Link>
  );
}
