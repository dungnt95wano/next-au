import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="Golfhub"
        description="Powering the Worlds Leading PGA Professionals"
        canonical="https://www.golfhub.co"
        openGraph={{
          url: 'https://www.golfhub.co',
          title: 'Golfhub',
          description: 'Powering the Worlds Leading PGA Professionals',
          site_name: 'Golfhub',
          images: [{ url: `https://www.golfhub.co/images/hero.jpeg`, width: 1200, height: 630, alt: 'Golfhub' }],
        }} />
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
