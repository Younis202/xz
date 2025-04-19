'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Low quality map placeholder (base64 encoded tiny image)
const worldMapPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAeAEoDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAYFBwIDBAj/xAAvEAABAwMDAgQEBgMAAAAAAAABAgMEAAURBhIhMUEHE1FhCBQicRUjMkKBkaHB0f/EABgBAAMBAQAAAAAAAAAAAAAAAAIDBAEA/8QAHxEAAgICAgMBAAAAAAAAAAAAAAECEQMhEjEEIkFR/9oADAMBAAIRAxEAPwD1VRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/9k=";

// Professional SVG icons for impact metrics
const IconStudents = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const IconScholarships = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconCountries = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconUniversities = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

export const GlobalImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Impact stories data
  const impactStories = [
    {
      country: 'Kenya',
      story: 'Established scholarship program that has funded education for 250+ underprivileged students',
      impact: 'Increased college attendance in rural communities by 35%'
    },
    {
      country: 'India',
      story: 'Partnered with 50+ local schools to provide international education resources and teacher training',
      impact: 'Improved English proficiency scores by 42% across partner schools'
    },
    {
      country: 'Brazil',
      story: 'Created mentorship program connecting 500+ first-generation college students with industry professionals',
      impact: 'Doubled graduate employment rates in STEM fields'
    },
    {
      country: 'Vietnam',
      story: 'Developed digital learning platform reaching 10,000+ students in remote areas',
      impact: 'Provided access to quality education resources for 75+ previously underserved communities'
    }
  ];

  // Impact metrics data
  const impactMetrics = [
    {
      number: '25,000+',
      label: 'Students Placed',
      icon: <IconStudents />,
      color: 'from-accent-emerald to-accent-turquoise'
    },
    {
      number: '$15M+',
      label: 'Scholarships Secured',
      icon: <IconScholarships />,
      color: 'from-accent-amber to-accent-orange'
    },
    {
      number: '45+',
      label: 'Countries Reached',
      icon: <IconCountries />,
      color: 'from-accent-sky to-accent-blue'
    },
    {
      number: '500+',
      label: 'University Partners',
      icon: <IconUniversities />,
      color: 'from-accent-lime to-accent-emerald'
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
    <section id="impact" className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Global Impact</span>
              <span className="inline-block ml-2 animate-bounce-slow">🌍</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Transforming Education Journeys and Creating Positive Change Worldwide
            </p>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
              className={`bg-gradient-to-br ${metric.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{metric.number}</div>
              <div className="text-white/90">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* World Map with Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 relative"
        >
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Transforming Education Journeys Worldwide
            </h3>
            
            <div className="relative h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
              {/* World map placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${worldMapPlaceholder})` }}
              ></div>
              
              {/* Map overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
              
              {/* Impact points - in a real implementation, these would be positioned on the actual map */}
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                  {impactStories.map((story, index) => (
                    <motion.div
                      key={story.country}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md"
                    >
                      <h4 className="text-lg font-bold text-primary-600 mb-2">{story.country}</h4>
                      <p className="text-gray-700 text-sm mb-2">{story.story}</p>
                      <div className="text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded-full inline-block">
                        Impact: {story.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* UN Sustainable Development Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Supporting UN Sustainable Development Goals
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our programs align with and contribute to the United Nations Sustainable Development Goals, particularly in education, equality, and economic growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { goal: 'Quality Education', number: '4', color: 'bg-accent-red' },
              { goal: 'Gender Equality', number: '5', color: 'bg-accent-orange' },
              { goal: 'Decent Work', number: '8', color: 'bg-accent-emerald' },
              { goal: 'Reduced Inequalities', number: '10', color: 'bg-accent-pink' }
            ].map((sdg, index) => (
              <motion.div
                key={sdg.goal}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`${sdg.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3`}>
                  {sdg.number}
                </div>
                <h4 className="font-semibold text-gray-800">{sdg.goal}</h4>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <a 
              href="#impact-report" 
              className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors duration-300"
            >
              Download Our Impact Report
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Student Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-5xl mb-6 flex justify-center">✨</div>
            <p className="text-xl text-gray-700 italic mb-6">
              "Nobel Campus didn't just help me study abroad - they empowered me to return to my community and create positive change. The leadership skills and global perspective I gained have allowed me to start an education initiative that now serves over 200 children in my hometown."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-lg font-bold text-primary-600 mr-4">RM</div>
              <div className="text-left">
                <p className="font-bold text-gray-800">Rahul Mehta</p>
                <p className="text-gray-600">Community Impact Award Winner, 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
