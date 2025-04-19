'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Professional SVG icons for CTA section
const IconConsultation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const IconResponse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconSecurity = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Performance optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-primary-900 to-secondary-900 text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="will-change-transform">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Plan Your Study Adventure!
              <span className="inline-block ml-2 animate-bounce-slow">✈️</span>
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="will-change-transform">
            <p className="text-xl text-white/90 mb-10">
              Your international education journey begins with a simple conversation. 
              Our expert counselors are ready to guide you through every step of the process.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-10 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="group">
                <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <IconConsultation />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Guidance</h3>
                <p className="text-white/80">Tailored advice for your unique profile and goals</p>
              </div>
              <div className="group">
                <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <IconResponse />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                <p className="text-white/80">Get answers within 24 hours guaranteed</p>
              </div>
              <div className="group">
                <div className="bg-white/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <IconSecurity />
                </div>
                <h3 className="text-xl font-bold mb-2">No Obligations</h3>
                <p className="text-white/80">Free consultation with no strings attached</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 will-change-transform"
          >
            <Link 
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Free Consultation
            </Link>
            <Link 
              href="#destinations"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Explore Programs
            </Link>
          </motion.div>
          
          {/* Testimonial for social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/10"
          >
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs">MN</div>
              </div>
              <div className="text-sm">
                <div className="text-yellow-400">★★★★★</div>
                <div className="text-white/70">Joined by 5,000+ students this month</div>
              </div>
            </div>
            <p className="text-white/90 italic">"The counselors at Nobel Campus made my dream of studying abroad a reality. They guided me through every step!" <span className="emoji-pop">🙌</span></p>
            <p className="text-white/70 text-sm mt-1">- Jamie, Harvard University</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
