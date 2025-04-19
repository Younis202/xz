'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [currentFact, setCurrentFact] = useState(0);
  
  // Fun facts that rotate
  const funFacts = [
    "Did you know? Students who study abroad are 2x more likely to find a job within 6 months! 🚀",
    "Fun fact: 96% of study abroad students say it increased their self-confidence! 💪",
    "Wow! Study abroad students earn 25% higher starting salaries on average! 💰",
    "Cool! 84% of study abroad students say it helped them build valuable job skills! 🛠️",
    "Awesome! Study abroad students are 90% more likely to get into their first-choice grad school! 🎓"
  ];
  
  useState(() => {
    const factInterval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % funFacts.length);
    }, 5000);
    
    return () => clearInterval(factInterval);
  }, []);

  const features = [
    {
      icon: '🎓',
      title: 'Top Universities',
      description: 'Access to prestigious schools worldwide',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: '💰',
      title: 'Scholarships',
      description: 'Find financial aid opportunities easily',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: '✈️',
      title: 'Travel Support',
      description: 'Visa help and travel preparation',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: '👥',
      title: 'Student Community',
      description: 'Connect with fellow travelers',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient with more vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-secondary-700/80 to-accent-neon-pink/50 z-0"></div>
      
      {/* Fun background pattern */}
      <div className="absolute inset-0 opacity-10 z-0 bg-teen-pattern"></div>
      
      {/* Enhanced floating elements with more variety */}
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-blob bg-accent-neon-pink/40 blur-xl z-0"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-20 w-24 h-24 rounded-blob bg-accent-neon-blue/40 blur-xl z-0"
        animate={{ 
          y: [0, -40, 0], 
          x: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-2/3 left-1/4 w-20 h-20 rounded-blob bg-accent-mint/40 blur-xl z-0"
        animate={{ 
          y: [0, 20, 0], 
          x: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-blob bg-accent-yellow/40 blur-xl z-0"
        animate={{ 
          y: [0, -15, 0], 
          x: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Hero content with enhanced styling */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                Your Journey to <span className="gradient-text-fun">Global</span> Adventure
                <span className="inline-block ml-2 animate-wiggle">🚀</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-xl text-white/90 mb-8">
                Find your perfect study abroad experience! Connect with top universities, unlock scholarships, and prepare for the adventure of a lifetime.
              </p>
            </motion.div>
            
            {/* Fun facts ticker */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/30"
            >
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentFact}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-white font-medium"
                >
                  {funFacts[currentFact]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Link href="#destinations" className="btn-fun">
                Explore Destinations
              </Link>
              <Link href="#journey" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
                <span className="mr-2">🗺️</span> Start Your Adventure
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-white">ICEF Certified</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-white">Teen-Friendly Programs</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-white">24/7 Support</span>
              </div>
            </motion.div>
          </div>
          
          {/* Feature cards with enhanced styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transition-all duration-300 card-3d overflow-hidden"
              >
                <div className="card-3d-inner relative z-10">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br ${feature.color} opacity-50 blur-xl`}></div>
                  <div className="text-4xl mb-4 emoji-pop">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Stats with enhanced styling */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "150+", label: "Universities", emoji: "🏛️" },
            { number: "45+", label: "Countries", emoji: "🌎" },
            { number: "98%", label: "Happy Students", emoji: "😄" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/5"></div>
              <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center">
                <span>{stat.number}</span>
                <span className="ml-2 text-2xl emoji-pop">{stat.emoji}</span>
              </div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonial preview with enhanced styling */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent-neon-pink/20 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent-neon-blue/20 blur-xl"></div>
          
          <div className="flex items-center space-x-2 mb-4 relative z-10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs">TJ</div>
              <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-xs">MK</div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs">AS</div>
            </div>
            <div className="text-yellow-400">★★★★★</div>
            <div className="text-white/80 text-sm">4.9/5 from 2000+ students</div>
          </div>
          <p className="text-white/90 italic relative z-10">"Best decision I ever made! Nobel Campus helped me find my dream university!" <span className="emoji-pop">🙌</span></p>
          <p className="text-white/70 text-sm mt-1 relative z-10">- Teen Traveler, Class of 2024</p>
        </motion.div>
      </div>
    </section>
  );
};
