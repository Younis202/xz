'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Professional SVG icons for journey steps
const IconConsultation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const IconApplication = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const IconVisa = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
  </svg>
);

const IconTravel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const StartJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Journey steps data
  const journeySteps = [
    {
      title: "Free Consultation",
      description: "Schedule a personalized consultation with our expert counselors to discuss your academic goals, preferences, and budget.",
      icon: <IconConsultation />,
      color: "from-accent-emerald to-accent-turquoise",
      features: [
        "30-minute video consultation",
        "Personalized program recommendations",
        "Initial eligibility assessment",
        "No obligations"
      ]
    },
    {
      title: "Application Support",
      description: "Receive comprehensive assistance with university applications, document preparation, and submission to maximize your chances of acceptance.",
      icon: <IconApplication />,
      color: "from-accent-sky to-accent-blue",
      features: [
        "Document preparation guidance",
        "Personal statement review",
        "Application fee waivers",
        "Interview preparation"
      ]
    },
    {
      title: "Visa & Preparation",
      description: "Get expert guidance through the visa application process and pre-departure preparation to ensure a smooth transition.",
      icon: <IconVisa />,
      color: "from-accent-amber to-accent-orange",
      features: [
        "Visa application assistance",
        "Pre-departure orientation",
        "Accommodation arrangements",
        "Health insurance guidance"
      ]
    },
    {
      title: "Begin Your Adventure",
      description: "Start your international education journey with confidence, knowing you have ongoing support throughout your studies abroad.",
      icon: <IconTravel />,
      color: "from-accent-pink to-accent-coral",
      features: [
        "Airport pickup service",
        "Local orientation",
        "Student community access",
        "Ongoing support"
      ]
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="start-journey" className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Journey</span>
              <span className="inline-block ml-2 animate-bounce-slow">🚀</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Your Global Education Journey Begins Here - Four Simple Steps to Transform Your Future
            </p>
          </motion.div>
        </div>

        {/* Journey Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              style={{ contentVisibility: 'auto' }} // Performance optimization
            >
              {/* Top colored section with icon */}
              <div className={`bg-gradient-to-r ${step.color} p-6 text-white relative h-48 flex flex-col justify-between`}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                  {step.icon}
                  <h3 className="text-xl font-bold mt-4">Step {index + 1}</h3>
                  <h4 className="text-2xl font-bold">{step.title}</h4>
                </div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="h-1 bg-white/20 flex-grow ml-2"></div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Form section */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Begin?</h3>
              <p className="text-gray-600 mb-6">
                Fill out this quick form to schedule your free consultation with one of our expert education counselors.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">I'm Interested In</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  >
                    <option value="">Select your interest</option>
                    <option value="undergraduate">Undergraduate Studies</option>
                    <option value="graduate">Graduate Studies</option>
                    <option value="phd">PhD Programs</option>
                    <option value="shortterm">Short-term Programs</option>
                  </select>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Schedule My Free Consultation
                </motion.button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
            
            {/* Image/Info section */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Start Now?</h3>
                <ul className="space-y-4">
                  {[
                    "Early applications have 35% higher acceptance rates",
                    "Priority access to scholarship opportunities",
                    "More time to prepare for visa applications",
                    "Better choices for accommodation options"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-accent-mint mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-4">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs text-primary-600 font-bold">JD</div>
                    <div className="w-8 h-8 rounded-full bg-accent-mint flex items-center justify-center text-xs text-primary-600 font-bold">KL</div>
                    <div className="w-8 h-8 rounded-full bg-accent-peach flex items-center justify-center text-xs text-primary-600 font-bold">MN</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-white/90">Join 5,000+ students who started their journey this month</div>
                  </div>
                </div>
                
                <div className="text-white/80 text-sm">
                  "The consultation was incredibly helpful and gave me clarity on my options. Within 3 months, I had my acceptance letter!"
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">Prefer to reach us another way?</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                method: "Call Us",
                detail: "+1 (800) 123-4567",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                method: "Email Us",
                detail: "admissions@nobelcampus.com",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                method: "Live Chat",
                detail: "Available 24/7",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.method}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-3">
                  {contact.icon}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">{contact.method}</div>
                  <div className="text-gray-600 text-sm">{contact.detail}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
