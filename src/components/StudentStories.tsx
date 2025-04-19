'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const StudentStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const stories = [
    {
      name: 'Sarah Chen',
      program: 'Business Administration',
      university: 'Manchester University',
      country: 'United Kingdom',
      achievement: 'Secured internship at Goldman Sachs',
      testimonial: 'My journey at Manchester University opened doors I never knew existed! The support from Nobel Campus made everything from application to graduation a breeze.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bgColor: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Mohammed Al-Rashid',
      program: 'Computer Science',
      university: 'University of Toronto',
      country: 'Canada',
      achievement: 'Launched tech startup post-graduation',
      testimonial: 'Studying in Toronto transformed my career path completely! The networking events and internship connections were invaluable to my professional development.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      bgColor: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Elena Popov',
      program: 'International Relations',
      university: 'Harvard University',
      country: 'United States',
      achievement: 'United Nations internship recipient',
      testimonial: 'From visa applications to housing, Nobel Campus guided me through every step. I couldn't have navigated the complex application process without their expertise!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bgColor: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Carlos Rodriguez',
      program: 'Engineering',
      university: 'University of Sydney',
      country: 'Australia',
      achievement: 'Research published in engineering journal',
      testimonial: 'My Australian adventure gave me skills I couldn't have developed anywhere else. The cultural immersion and practical engineering projects were game-changing!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bgColor: 'from-orange-500 to-red-500'
    },
    {
      name: 'Aisha Patel',
      program: 'Medicine',
      university: 'Johns Hopkins University',
      country: 'United States',
      achievement: 'Accepted to top 5 medical school',
      testimonial: 'Nobel Campus helped me navigate the competitive medical school admissions process successfully. Their personalized guidance made all the difference!',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      bgColor: 'from-green-500 to-teal-500'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Student <span className="gradient-text">Stories</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="section-subtitle">
              Hear directly from our students about their life-changing international education journeys
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={story.name} className="w-full flex-shrink-0 px-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className={`bg-gradient-to-r ${story.bgColor} p-8 text-white`}>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
                          {/* This would be replaced with actual Next.js Image component in a real app */}
                          <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${story.avatar})` }}
                          ></div>
                        </div>
                        <div className="text-center md:text-left">
                          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-2">
                            {story.achievement}
                          </div>
                          <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                          <p className="text-white/90 mb-1">{story.program}</p>
                          <p className="text-white/80 text-sm">{story.university}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 italic text-lg mb-6">"{story.testimonial}"</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-yellow-400">★★★★★</div>
                          <span className="ml-2 text-gray-500 text-sm">5.0/5</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {story.country}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="btn-secondary">
            Read More Success Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};
