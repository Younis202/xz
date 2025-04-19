'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Low quality video thumbnails (base64 encoded tiny images)
const videoThumbnails = {
  student1: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGEQcSITFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnnW+3G1u9icvZWE0sF3CykuKkEfHFBUi4vLeHmeSP//Z",
  student2: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAUGESExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxES/9oADAMBAAIRAxEAPwCvtNxNlrTLVlnqoXSxwvLHODSQCPXSIiALJqzSjKmf/9k=",
  student3: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z",
  student4: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z"
};

// SVG Play button icon
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  
  // Video testimonial data
  const testimonials = [
    {
      id: 'student1',
      name: 'Emma Thompson',
      program: 'Business Administration',
      university: 'University of Oxford',
      country: 'United Kingdom',
      thumbnail: videoThumbnails.student1,
      videoUrl: '#', // In a real app, this would be a real video URL
      quote: "Nobel Campus helped me find my dream university and guided me through every step of the application process!",
      bgColor: 'from-teen-green to-teen-teal'
    },
    {
      id: 'student2',
      name: 'Miguel Rodriguez',
      program: 'Computer Science',
      university: 'MIT',
      country: 'United States',
      thumbnail: videoThumbnails.student2,
      videoUrl: '#', // In a real app, this would be a real video URL
      quote: "Thanks to Nobel Campus, I received a full scholarship to study at one of the world's top tech universities!",
      bgColor: 'from-teen-blue to-teen-sky'
    },
    {
      id: 'student3',
      name: 'Aisha Patel',
      program: 'International Relations',
      university: 'Sciences Po',
      country: 'France',
      thumbnail: videoThumbnails.student3,
      videoUrl: '#', // In a real app, this would be a real video URL
      quote: "The cultural preparation workshops made my transition to studying abroad so much smoother!",
      bgColor: 'from-teen-amber to-teen-orange'
    },
    {
      id: 'student4',
      name: 'Liam Chen',
      program: 'Medicine',
      university: 'University of Melbourne',
      country: 'Australia',
      thumbnail: videoThumbnails.student4,
      videoUrl: '#', // In a real app, this would be a real video URL
      quote: "Nobel Campus found me a program that perfectly matched my career goals and budget constraints!",
      bgColor: 'from-teen-pink to-teen-red'
    }
  ];

  const handleVideoClick = (id) => {
    setActiveVideo(id);
    setIsPlaying(true);
    // In a real implementation, this would trigger the actual video to play
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

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
    <section id="video-testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Video</span> Testimonials
              <span className="inline-block ml-2 animate-bounce-slow">📹</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Hear directly from our students about their life-changing international education experiences
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => handleVideoClick(testimonial.id)}
            >
              {/* Video thumbnail with play button */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Low quality image placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
                ></div>
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-70`}></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110"
                  >
                    <PlayIcon />
                  </motion.div>
                </div>
              </div>
              
              {/* Testimonial info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                <p className="text-gray-600 mb-3">{testimonial.program} • {testimonial.university}</p>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 text-sm">{testimonial.country}</span>
                  </div>
                  <span className="text-primary-600 font-medium text-sm flex items-center">
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video modal (would be implemented with a real video player in production) */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={closeVideo}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2"
                  onClick={closeVideo}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Video placeholder */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-900 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-4xl mb-4">🎬</div>
                    <p className="text-xl font-bold mb-2">Video Player Placeholder</p>
                    <p>In a real implementation, this would be a video player showing the selected testimonial.</p>
                    <p className="mt-4 text-sm text-gray-400">Video ID: {activeVideo}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#more-stories" 
            className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors duration-300"
          >
            View More Student Stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
