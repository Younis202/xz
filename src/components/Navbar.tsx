'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState(0);

  // Fun emojis for teen appeal
  const emojis = ['🚀', '🌈', '✨', '🔥', '💯', '🎓'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Emoji rotation for fun effect
    const emojiInterval = setInterval(() => {
      setActiveEmoji((prev) => (prev === emojis.length - 1 ? 0 : prev + 1));
    }, 2000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(emojiInterval);
    };
  }, [emojis.length]);

  const navLinks = [
    { name: 'Destinations', href: '#destinations', emoji: '🌎' },
    { name: 'Programs', href: '#programs', emoji: '📚' },
    { name: 'Why Choose Us', href: '#why-choose-us', emoji: '🏆' },
    { name: 'Student Gallery', href: '#gallery', emoji: '📸' },
    { name: 'Global Impact', href: '#impact', emoji: '🌍' },
    { name: 'FAQ', href: '#faq', emoji: '❓' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center"
            >
              {/* Fun emoji that changes */}
              <motion.span 
                key={activeEmoji}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="text-2xl mr-2 emoji-pop"
              >
                {emojis[activeEmoji]}
              </motion.span>
              
              <div className="font-display font-bold text-2xl">
                <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                  Nobel
                </span>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-accent-emerald to-accent-sky ml-1`}>Campus</span>
              </div>
              
              {/* Fun hover effect */}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-accent-emerald to-accent-sky rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Modern Style */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={`font-medium transition-all duration-300 hover:text-primary-600 flex items-center group px-3 py-2 rounded-lg ${
                    isScrolled ? 'text-gray-800 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span className="emoji-pop mr-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">{link.emoji}</span>
                  {link.name}
                  
                  {/* Animated underline on hover */}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-accent-emerald to-accent-sky"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <Link
                href="#start-journey"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
              >
                <span className="mr-1">🚀</span> Start Your Journey
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Modern Style */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="emoji-pop mr-2">{link.emoji}</span>
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <Link
              href="#start-journey"
              className="block w-full text-center px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mr-1">🚀</span> Start Your Journey
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};
