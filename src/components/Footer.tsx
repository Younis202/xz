'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Professional SVG icons for footer
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const IconTwitter = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const IconYouTube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  
  // Enhanced footer links with improved content
  const footerLinks = {
    'Programs': [
      { name: 'Bachelor\'s Degrees', href: '#bachelors' },
      { name: 'Master\'s Degrees', href: '#masters' },
      { name: 'PhD Programs', href: '#phd' },
      { name: 'Short Courses', href: '#short-courses' },
      { name: 'Summer Schools', href: '#summer' },
    ],
    'Destinations': [
      { name: 'Study in UK', href: '#uk' },
      { name: 'Study in USA', href: '#usa' },
      { name: 'Study in Canada', href: '#canada' },
      { name: 'Study in Australia', href: '#australia' },
      { name: 'View All Destinations', href: '#all-destinations' },
    ],
    'Resources': [
      { name: 'Scholarship Guide', href: '#scholarships' },
      { name: 'Visa Information', href: '#visa' },
      { name: 'Student Stories', href: '#stories' },
      { name: 'Career Advice', href: '#career' },
      { name: 'FAQ', href: '#faq' },
    ],
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Careers', href: '#careers' },
    ],
  };

  // Enhanced social links with professional icons
  const socialLinks = [
    { name: 'Instagram', href: '#instagram', icon: <IconInstagram /> },
    { name: 'Facebook', href: '#facebook', icon: <IconFacebook /> },
    { name: 'Twitter', href: '#twitter', icon: <IconTwitter /> },
    { name: 'YouTube', href: '#youtube', icon: <IconYouTube /> },
    { name: 'LinkedIn', href: '#linkedin', icon: <IconLinkedIn /> },
  ];

  // Performance optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Reduced for faster animation
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduced y distance for faster animation
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 } // Reduced for faster animation
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="font-display font-bold text-3xl text-white flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                Nobel Campus
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting ambitious students with world-class educational opportunities since 2010. Trusted by 25,000+ students globally.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div key={category} variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="absolute w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300"></span>
                      <span className="ml-0 group-hover:ml-5 transition-all duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-gray-800 pt-10 pb-8 mb-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest program updates, scholarship opportunities, and student success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Email address"
              />
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Nobel Campus. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link href="#terms" className="hover:text-gray-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#privacy" className="hover:text-gray-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#cookies" className="hover:text-gray-400 transition-colors duration-300">
              Cookie Policy
            </Link>
            <Link href="#accessibility" className="hover:text-gray-400 transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </motion.div>
        
        {/* Production-ready features */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          <p>Nobel Campus is committed to providing a secure, accessible, and responsive experience for all users.</p>
          <div className="flex justify-center gap-4 mt-2">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              SSL Secured
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              CDN Optimized
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile Friendly
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
