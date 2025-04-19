'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  // FAQ data with improved content
  const faqItems = [
    {
      question: "How do I choose the right university for my study abroad journey?",
      answer: "Choosing the right university involves considering several factors: academic programs that match your interests, location preferences, budget constraints, and career goals. Our AI-powered matching system analyzes over 20 data points from your profile to recommend universities that best fit your unique needs. Additionally, our counselors provide personalized guidance to help you make an informed decision based on your specific circumstances and aspirations."
    },
    {
      question: "What scholarships are available for international students?",
      answer: "There are numerous scholarship opportunities for international students, including merit-based scholarships, need-based financial aid, country-specific scholarships, and program-specific grants. At Nobel Campus, we maintain a database of 10,000+ scholarships updated weekly. Our scholarship matching service has helped students secure over $15 million in financial aid in the past year alone. We'll help you identify and apply for scholarships that match your academic profile, nationality, and field of study."
    },
    {
      question: "How long does the visa application process typically take?",
      answer: "Visa processing times vary by country, ranging from 2 weeks to 3 months. For example, UK student visas typically take 3-4 weeks, while US student visas may take 4-8 weeks during peak seasons. Our visa specialists provide country-specific guidance, document preparation assistance, and application timeline planning to ensure you apply with sufficient lead time. Our visa success rate is 98%, significantly higher than the global average of 76% for student visa applications."
    },
    {
      question: "Can Nobel Campus help with accommodation arrangements?",
      answer: "Yes, we provide comprehensive accommodation support. We offer access to our database of 50,000+ verified student housing options across 45+ countries, including on-campus dormitories, private student residences, homestays, and shared apartments. Our housing specialists help you compare options based on your budget, location preferences, and amenities required. We also provide virtual tours, lease review services, and roommate matching assistance to ensure you find safe, comfortable, and affordable housing."
    },
    {
      question: "What kind of support does Nobel Campus provide after I arrive at my destination?",
      answer: "Our support continues well beyond your arrival. We provide airport pickup services, local orientation sessions, and a 24/7 emergency helpline. Our mobile app connects you with local student ambassadors and fellow international students. We also offer cultural adaptation workshops, local banking setup assistance, and regular check-ins during your first semester. Additionally, our career services team provides internship opportunities, networking events, and job placement assistance throughout your academic journey."
    },
    {
      question: "How does the application process work with Nobel Campus?",
      answer: "Our application process is streamlined into five simple steps: 1) Initial consultation to understand your goals and preferences, 2) University matching and program selection, 3) Document preparation and application submission, 4) Interview preparation and admission follow-up, and 5) Post-acceptance services including visa guidance, pre-departure orientation, and accommodation arrangements. Throughout this process, you'll have a dedicated counselor and access to our online portal where you can track your application status in real-time."
    },
    {
      question: "What are the typical costs associated with studying abroad?",
      answer: "Study abroad costs vary widely depending on the country, university, and program. Tuition fees range from $0 in countries like Germany and Norway to $50,000+ per year at prestigious US universities. Living expenses typically range from $8,000 to $20,000 annually depending on the city. Additional costs include visa fees ($100-$500), health insurance ($300-$1,200/year), and travel expenses. We provide detailed cost breakdowns for each destination and help you develop a comprehensive financial plan, including scholarship opportunities and part-time work options where permitted."
    },
    {
      question: "Can I work while studying abroad?",
      answer: "Work regulations for international students vary by country. For example, the UK allows up to 20 hours/week during term time, while Canada permits up to 20 hours/week off-campus work. Some countries like Germany have no hourly restrictions but limit annual earnings. We provide country-specific guidance on work permissions, help you understand local labor laws, and connect you with student job opportunities through our employer network. We also offer workshops on resume building, interview skills, and work-study balance to help you succeed academically while gaining valuable work experience."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h2 className="section-title">
              Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Questions</span>
              <span className="inline-block ml-2 animate-bounce-slow">❓</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="will-change-transform"
          >
            <p className="section-subtitle">
              Find answers to common questions about studying abroad with Nobel Campus
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                style={{ contentVisibility: 'auto' }} // Performance optimization
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-gray-800 text-lg">{item.question}</span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        <div className="border-t border-gray-100 pt-4">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Still have questions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Still Have Questions?</h3>
              <p className="text-gray-700">
                Our education experts are ready to provide personalized answers to your specific questions.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-white text-primary-600 hover:bg-gray-50 font-bold py-3 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Contact Us
              </a>
              <a 
                href="#schedule" 
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Resources section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Helpful Resources</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Study Abroad Guide',
                description: 'Comprehensive guide covering all aspects of international education',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: 'Visa Requirements',
                description: 'Country-specific visa information and application checklists',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: 'Scholarship Database',
                description: 'Searchable database of international scholarships and grants',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={`#resource-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <span className="text-primary-600 font-medium text-sm flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
