'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Professional SVG icons for advantages
const IconGlobal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconExpertise = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconSupport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconSuccess = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconInnovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconPersonalized = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Enhanced advantages with professional icons and improved content
  const advantages = [
    {
      title: 'Global Network',
      description: 'Access to 500+ top universities across 45+ countries worldwide, offering unparalleled educational opportunities.',
      icon: <IconGlobal />,
      stats: '500+ Universities',
      color: 'bg-gradient-to-br from-accent-emerald/10 to-accent-turquoise/10'
    },
    {
      title: 'Expert Guidance',
      description: 'Our counselors have 10+ years of experience and specialized knowledge in international education systems.',
      icon: <IconExpertise />,
      stats: '50+ Certified Counselors',
      color: 'bg-gradient-to-br from-accent-sky/10 to-accent-blue/10'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey, from application to arrival and beyond.',
      icon: <IconSupport />,
      stats: '98% Support Satisfaction',
      color: 'bg-gradient-to-br from-accent-amber/10 to-accent-orange/10'
    },
    {
      title: 'Proven Success',
      description: '95% of our students are accepted to one of their top three university choices.',
      icon: <IconSuccess />,
      stats: '25,000+ Success Stories',
      color: 'bg-gradient-to-br from-accent-lime/10 to-accent-emerald/10'
    },
    {
      title: 'Innovative Technology',
      description: 'Our AI-powered matching system finds the perfect programs based on your academic profile and preferences.',
      icon: <IconInnovation />,
      stats: '99.8% Match Accuracy',
      color: 'bg-gradient-to-br from-accent-sky/10 to-accent-turquoise/10'
    },
    {
      title: 'Personalized Approach',
      description: 'Tailored guidance that considers your unique goals, budget constraints, and career aspirations.',
      icon: <IconPersonalized />,
      stats: '100% Customized Plans',
      color: 'bg-gradient-to-br from-accent-peach/10 to-accent-coral/10'
    }
  ];

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
    <section id="why-choose-us" className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Choose Us</span>
              <span className="inline-block ml-2 animate-pulse-slow">🏆</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              The Nobel Campus Advantage: What sets us apart in guiding your international education journey
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`${advantage.color} rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 will-change-transform`}
              style={{ contentVisibility: 'auto' }} // Performance optimization
            >
              <div className="mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 mb-6">{advantage.description}</p>
              
              <div className="mt-auto">
                <div className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="font-bold text-primary-600">{advantage.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Excellence in Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              EXCELLENCE IN EDUCATION
              <span className="inline-block ml-2 animate-pulse-slow">🎓</span>
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence has made us the trusted partner for thousands of students seeking quality international education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '98%', label: 'Visa Success Rate', icon: '✅' },
              { number: '10+', label: 'Years of Experience', icon: '⏱️' },
              { number: '45+', label: 'Countries Covered', icon: '🌎' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2 flex items-center justify-center">
                  <span>{stat.number}</span>
                  <span className="ml-2 text-2xl emoji-pop">{stat.icon}</span>
                </div>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Learn More About Our Excellence
            </motion.button>
          </div>
        </motion.div>
        
        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-10 -left-10 text-8xl text-primary-200 opacity-50">"</div>
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-xl text-gray-700 italic mb-6">
                Nobel Campus transformed my dream of studying abroad into reality. Their personalized guidance, scholarship assistance, and unwavering support made all the difference in my journey to Harvard.
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-lg font-bold text-primary-600 mr-4">JD</div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Jessica Davis</p>
                  <p className="text-gray-600">Harvard University, Class of 2023</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 text-8xl text-primary-200 opacity-50">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
