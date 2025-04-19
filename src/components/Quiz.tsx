'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Professional SVG icons for quiz options
const IconBachelor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const IconMaster = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconPhD = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconDiploma = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    academicLevel: '',
    fieldOfStudy: '',
    destination: '',
    budget: '',
  });
  const [showResults, setShowResults] = useState(false);
  
  // Reference for viewport detection and lazy loading
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // Enhanced questions with professional icons and improved content
  const questions = [
    {
      id: 'academicLevel',
      question: 'What level would you like to pursue?',
      options: [
        { value: 'bachelor', label: 'Bachelor\'s Degree', description: 'Undergraduate studies (3-4 years)', icon: <IconBachelor /> },
        { value: 'master', label: 'Master\'s Degree', description: 'Advanced specialization (1-2 years)', icon: <IconMaster /> },
        { value: 'phd', label: 'PhD', description: 'Research doctorate (3-5 years)', icon: <IconPhD /> },
        { value: 'diploma', label: 'Diploma/Certificate', description: 'Short-term qualification (6-12 months)', icon: <IconDiploma /> },
      ],
      emoji: '🎓'
    },
    {
      id: 'fieldOfStudy',
      question: 'What field are you interested in?',
      options: [
        { value: 'business', label: 'Business & Management', description: 'MBA, Finance, Marketing, Entrepreneurship', icon: '💼' },
        { value: 'stem', label: 'STEM', description: 'Science, Technology, Engineering, Mathematics', icon: '🔬' },
        { value: 'arts', label: 'Arts & Humanities', description: 'Design, Languages, History, Literature', icon: '🎨' },
        { value: 'health', label: 'Health Sciences', description: 'Medicine, Nursing, Public Health, Psychology', icon: '⚕️' },
      ],
      emoji: '📚'
    },
    {
      id: 'destination',
      question: 'Where would you like to study?',
      options: [
        { value: 'europe', label: 'Europe', description: 'UK, Germany, France, Spain, Italy, etc.', icon: '🇪🇺' },
        { value: 'northAmerica', label: 'North America', description: 'USA, Canada', icon: '🌎' },
        { value: 'asia', label: 'Asia', description: 'Japan, Singapore, South Korea, China', icon: '🌏' },
        { value: 'oceania', label: 'Oceania', description: 'Australia, New Zealand', icon: '🌏' },
      ],
      emoji: '🌎'
    },
    {
      id: 'budget',
      question: 'What\'s your budget range?',
      options: [
        { value: 'low', label: 'Budget-Friendly', description: 'Under $15,000/year', icon: '💰' },
        { value: 'medium', label: 'Mid-Range', description: '$15,000-$30,000/year', icon: '💰💰' },
        { value: 'high', label: 'Premium', description: '$30,000-$50,000/year', icon: '💰💰💰' },
        { value: 'scholarship', label: 'Need Scholarship', description: 'Looking for financial aid opportunities', icon: '🏆' },
      ],
      emoji: '💰'
    },
  ];

  const handleOptionSelect = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
    
    if (step < questions.length - 1) {
      setTimeout(() => {
        setStep(step + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 500);
    }
  };

  const resetQuiz = () => {
    setAnswers({
      academicLevel: '',
      fieldOfStudy: '',
      destination: '',
      budget: '',
    });
    setStep(0);
    setShowResults(false);
  };

  const currentQuestion = questions[step];

  // Low quality image placeholders for results
  const resultImagePlaceholders = {
    manchester: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGEQcSITFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnnW+3G1u9icvZWE0sF3CykuKkEfHFBUi4vLeHmeSP//Z",
    toronto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAUGESExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxES/9oADAMBAAIRAxEAPwCvtNxNlrTLVlnqoXSxwvLHODSQCPXSIiALJqzSjKmf/9k=",
    munich: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMEEQAFBhITFCExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIRIf/aAAwDAQACEQMRAD8AoNX6jzGozKWmrKhpYoWKqhNwBfGMYwLbZJdqf//Z",
  };

  // Mock results based on answers - enhanced with better content
  const getResults = () => {
    const results = [
      {
        university: 'University of Manchester',
        program: 'MSc International Business',
        country: 'United Kingdom',
        match: '98%',
        tuition: '$25,000/year',
        image: resultImagePlaceholders.manchester,
        features: ['Top 30 worldwide', 'Internship opportunities', 'Career coaching']
      },
      {
        university: 'University of Toronto',
        program: 'Bachelor of Commerce',
        country: 'Canada',
        match: '95%',
        tuition: '$30,000/year',
        image: resultImagePlaceholders.toronto,
        features: ['Work permit eligible', 'Diverse student body', 'Industry connections']
      },
      {
        university: 'Technical University of Munich',
        program: 'MSc Computer Science',
        country: 'Germany',
        match: '92%',
        tuition: '$0/year (Scholarship available)',
        image: resultImagePlaceholders.munich,
        features: ['Tuition-free', 'Research opportunities', 'Industry partnerships']
      },
    ];
    
    return results;
  };

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
    <section id="quiz" className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              <span className="gradient-text-fun">Quiz Me!</span> Find Your Perfect Match
              <span className="inline-block ml-2 animate-bounce-slow">🎮</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Answer a few questions and let our intelligent matching system find programs tailored perfectly to your educational aspirations
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {!showResults ? (
              <div className="p-8">
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${(step / (questions.length - 1)) * 100}%` }}
                  ></div>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="will-change-transform"
                  >
                    <div className="text-center mb-8">
                      <div className="text-5xl mb-4 emoji-pop">{currentQuestion.emoji}</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentQuestion.question}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentQuestion.options.map((option) => (
                        <motion.button
                          key={option.value}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                          className="bg-white border-2 border-gray-200 hover:border-primary-500 rounded-xl p-6 text-left transition-all duration-300 hover:shadow-md flex items-start"
                        >
                          <div className="mr-4 mt-1">
                            {typeof option.icon === 'string' ? (
                              <span className="text-2xl">{option.icon}</span>
                            ) : (
                              option.icon
                            )}
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-1">{option.label}</h4>
                            <p className="text-gray-600">{option.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <div className="p-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-center mb-8">
                    <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                      Results Found! 🎉
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Perfect Program Matches</h3>
                    <p className="text-gray-600">Based on your preferences, we've found these excellent matches for you</p>
                  </div>
                  
                  <div className="space-y-6">
                    {getResults().map((result, index) => (
                      <motion.div
                        key={result.university}
                        variants={itemVariants}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        style={{ contentVisibility: 'auto' }} // Performance optimization
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            {/* Low quality image placeholder */}
                            <div 
                              className="w-full h-full bg-cover bg-center"
                              style={{ backgroundImage: `url(${result.image})` }}
                            ></div>
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                              {result.match} Match
                            </div>
                          </div>
                          <div className="p-6 md:w-2/3">
                            <h4 className="text-xl font-bold text-gray-800 mb-1">{result.program}</h4>
                            <p className="text-gray-700 mb-3">{result.university}, {result.country}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {result.features.map((feature, i) => (
                                <span key={i} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center text-gray-600 mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {result.tuition}
                            </div>
                            <div className="flex justify-between items-center">
                              <button className="text-primary-600 hover:text-primary-700 font-medium">
                                View Details
                              </button>
                              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                                Apply Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button 
                      onClick={resetQuiz}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center mx-auto"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Take the Quiz Again
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-6 inline-block">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 emoji-pop">👩🏽‍🎓</div>
                <div className="text-left">
                  <p className="text-gray-700 italic mb-2">"This quiz helped me find the perfect master's program that matched all my needs. Highly recommended!"</p>
                  <p className="text-gray-600 font-medium">Sarah J.</p>
                  <p className="text-gray-500 text-sm">Current MBA Student</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary-600 mr-2">10,000+</span>
                  <span className="text-gray-600">Programs Available</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <div className="text-sm font-medium text-gray-800">Expert-Verified Programs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
