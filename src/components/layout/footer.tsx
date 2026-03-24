import { BrandLogo } from '@/components/ui/brand-logo';

type FooterLink = {
  readonly label: string;
  readonly href: string;
};

type FooterGroup = {
  readonly heading: string;
  readonly links: readonly FooterLink[];
};

const FOOTER_GROUPS: readonly FooterGroup[] = [
  {
    heading: 'Product',
    links: [
      { label: 'How it Works', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Corridors', href: '#corridors' },
      { label: 'Mobile App', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <BrandLogo />
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text3)' }}>
              Fast, low-fee international money transfers to Africa, Asia, Latin America and beyond.
            </p>
            {/* Regulated notice */}
            <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'var(--badge-bg)', color: 'var(--text3)' }}>
              🏦 Regulated by FinCEN · FCA · FINTRAC
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--text3)' }}>
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-80"
                      style={{ color: 'var(--text2)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-3 border-t py-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text3)' }}>
            © {new Date().getFullYear()} PayBridge Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {(['Privacy Policy', 'Terms of Service', 'Cookie Policy'] as const).map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs transition-opacity hover:opacity-80"
                style={{ color: 'var(--text3)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
