'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Professional SVG icons for journey steps
const IconExplore = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconApply = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconAccept = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconJourney = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const Journey = () => {
  // Enhanced steps with professional icons and improved content
  const steps = [
    {
      title: 'Explore Programs',
      description: 'Browse our extensive range of programs and universities to find your perfect academic match.',
      icon: <IconExplore />,
      details: [
        'AI-powered personalized recommendations',
        'Compare institutions side-by-side',
        'Expert guidance from admission specialists'
      ]
    },
    {
      title: 'Apply Online',
      description: 'Complete our simplified application process with personalized guidance from our expert counselors.',
      icon: <IconApply />,
      details: [
        '24/7 support via chat, email, and phone',
        'Streamlined document submission system',
        'Professional application review service'
      ]
    },
    {
      title: 'Get Accepted',
      description: 'Receive your acceptance letter and prepare for your international education journey with our support.',
      icon: <IconAccept />,
      details: [
        'Visa application assistance with 98% success rate',
        'Pre-departure orientation workshops',
        'Scholarship matching service with $10M+ awarded annually'
      ]
    },
    {
      title: 'Start Your Journey',
      description: 'Begin your international education adventure with comprehensive support every step of the way.',
      icon: <IconJourney />,
      details: [
        'Airport pickup and accommodation assistance',
        'Local orientation and cultural integration programs',
        'Global student community with 25,000+ members'
      ]
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Performance optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced for faster animation
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduced y distance for faster animation
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 } // Reduced for faster animation
    }
  };

  return (
    <section id="journey" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              Your <span className="gradient-text-fun">Journey</span> Starts Here
              <span className="inline-block ml-2 animate-pulse-slow">🚀</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              A seamless four-step process designed to transform your international education aspirations into reality
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line with gradient and animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 to-secondary-500 rounded-full hidden md:block">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-white h-full origin-top"
              initial={{ scaleY: 1 }}
              animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 md:space-y-0"
          >
            {steps.map((step, index) => (
              <div key={step.title} className="relative" style={{ contentVisibility: 'auto' }}>
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg border-4 border-primary-500 z-10 flex items-center justify-center text-2xl hidden md:flex">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 teen-card">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mr-4 md:hidden">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-accent-neon-pink mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline alignment */}
                  <div className="md:w-1/2"></div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ready to Begin Your Adventure?</h3>
              <p className="text-gray-700">
                Join over 25,000+ students who've successfully studied abroad with our guidance
              </p>
            </div>
            <button className="btn-fun whitespace-nowrap">
              <span className="mr-2">🚀</span> Start Your Journey Today
            </button>
          </div>
          
          {/* Social proof */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <div className="text-yellow-400 flex">★★★★★</div>
              <span className="ml-2 text-gray-600">4.9/5 from 3,000+ reviews</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-gray-600">100% Secure Application Process</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">24/7 Support Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
