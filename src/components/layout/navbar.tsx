'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BrandLogo } from '@/components/ui/brand-logo';

const NAV_LINKS = [
  { label: 'Corridors', href: '#corridors' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it Works', href: '#how' },
] as const;

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <nav
      style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <BrandLogo />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: 'var(--text2)' }}
                className="text-sm font-medium transition-colors hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{ background: 'var(--badge-bg)', border: '1px solid var(--border)', color: 'var(--text2)' }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-base transition-opacity hover:opacity-80"
            >
              {mounted ? (isDark ? '☀️' : '🌙') : '🌙'}
            </button>

            {/* CTA */}
            <Link
              href="/auth/register"
              style={{ background: 'linear-gradient(135deg, var(--color-p500), var(--color-p600))', color: '#fff' }}
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold shadow transition-opacity hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
