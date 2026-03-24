import Link from 'next/link';

export function LandingCta() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, var(--color-p600), var(--color-p500), var(--color-p400))',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Start Sending Today
        </h2>
        <p className="mt-4 text-base text-white/80">
          Join 250,000+ people who send money home with PayBridge. Download the app or sign up on web — it takes less than 2 minutes.
        </p>

        {/* Store badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-5 py-3 transition-opacity hover:opacity-90"
            style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Download on the App Store"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <div className="text-xs text-white/70">Download on the</div>
              <div className="text-sm font-semibold text-white">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-5 py-3 transition-opacity hover:opacity-90"
            style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.2)' }}
            aria-label="Get it on Google Play"
          >
            <span className="text-2xl">▶</span>
            <div className="text-left">
              <div className="text-xs text-white/70">Get it on</div>
              <div className="text-sm font-semibold text-white">Google Play</div>
            </div>
          </a>

          {/* Web sign up */}
          <Link
            href="/auth/register"
            className="flex items-center gap-3 rounded-xl px-5 py-3 font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: '#fff', color: 'var(--color-p500)' }}
          >
            Sign Up on Web →
          </Link>
        </div>
      </div>
    </section>
  );
}
