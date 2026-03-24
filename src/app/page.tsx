import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/landing/hero';
import { Stats } from '@/components/landing/stats';
import { Corridors } from '@/components/landing/corridors';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Pricing } from '@/components/landing/pricing';
import { Testimonials } from '@/components/landing/testimonials';
import { LandingCta } from '@/components/landing/cta';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Corridors />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <LandingCta />
      </main>
      <Footer />
    </>
  );
}
