'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Destinations } from '@/components/Destinations';
import { Journey } from '@/components/Journey';
import { VideoTestimonials } from '@/components/VideoTestimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { GlobalImpact } from '@/components/GlobalImpact';
import { StudentGallery } from '@/components/StudentGallery';
import { StudentStories } from '@/components/StudentStories';
import { Quiz } from '@/components/Quiz';
import { Services } from '@/components/Services';
import { FAQ } from '@/components/FAQ';
import { StartJourney } from '@/components/StartJourney';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Journey />
      <VideoTestimonials />
      <WhyChooseUs />
      <StudentStories />
      <GlobalImpact />
      <StudentGallery />
      <Quiz />
      <Services />
      <FAQ />
      <StartJourney />
      <CallToAction />
      <Footer />
    </main>
  );
}
