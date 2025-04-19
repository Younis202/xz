'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// Low quality image placeholders (base64 encoded tiny images)
const lowQualityImagePlaceholders = {
  uk: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGEQcSITFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnnW+3G1u9icvZWE0sF3CykuKkEfHFBUi4vLeHmeSP//Z",
  usa: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAUGESExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxES/9oADAMBAAIRAxEAPwCvtNxNlrTLVlnqoXSxwvLHODSQCPXSIiALJqzSjKmf/9k=",
  australia: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z",
  canada: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z",
  germany: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z",
  france: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z"
};

// Optimized component with performance improvements
export const Destinations = () => {
  const destinations = [
    {
      name: 'United Kingdom',
      image: lowQualityImagePlaceholders.uk, // Using low quality placeholder
      universities: 45,
      programs: 230,
      emoji: '🇬🇧'
    },
    {
      name: 'United States',
      image: lowQualityImagePlaceholders.usa, // Using low quality placeholder
      universities: 65,
      programs: 310,
      emoji: '🇺🇸'
    },
    {
      name: 'Australia',
      image: lowQualityImagePlaceholders.australia, // Using low quality placeholder
      universities: 28,
      programs: 175,
      emoji: '🇦🇺'
    },
    {
      name: 'Canada',
      image: lowQualityImagePlaceholders.canada, // Using low quality placeholder
      universities: 32,
      programs: 190,
      emoji: '🇨🇦'
    },
    {
      name: 'Germany',
      image: lowQualityImagePlaceholders.germany, // Using low quality placeholder
      universities: 30,
      programs: 160,
      emoji: '🇩🇪'
    },
    {
      name: 'France',
      image: lowQualityImagePlaceholders.france, // Using low quality placeholder
      universities: 25,
      programs: 145,
      emoji: '🇫🇷'
    },
  ];

  // Performance optimization: use useRef and useInView for lazy loading
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1 for faster animation
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 } // Reduced from 0.5 for faster animation
    }
  };

  return (
    <section id="destinations" className="py-16 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              <span className="gradient-text-fun">Choose</span> Your Destination
              <span className="inline-block ml-2 animate-bounce-slow">✈️</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Explore our global network of partner universities across these exciting destinations
              <span className="emoji-pop ml-2">🌎</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover will-change-transform"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              // Content visibility for performance
              style={{ contentVisibility: 'auto' }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                {/* Low quality image placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                
                {/* Colorful overlay based on country */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                  group-hover:from-primary-900/80 group-hover:via-primary-700/40 transition-all duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 flex items-center">
                        <span className="emoji-pop mr-2">{destination.emoji}</span> {destination.name}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <span className="mr-3">{destination.universities} Universities</span>
                        <span>{destination.programs} Programs</span>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fun hover effect with teen-friendly colors */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                bg-gradient-to-r from-teen-purple/80 to-teen-blue/80 flex items-center justify-center">
                <Link href={`#destination-${destination.name.toLowerCase()}`} 
                  className="bg-white text-primary-600 font-bold py-2 px-4 rounded-xl 
                  hover:bg-gray-100 transition-colors duration-300 transform hover:scale-110 
                  flex items-center space-x-2">
                  <span>Explore Programs</span>
                  <span className="emoji-pop">🚀</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="#all-destinations" className="btn-fun">
            <span className="mr-2">🌍</span> View All Destinations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
