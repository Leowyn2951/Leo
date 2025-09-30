import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8"
        >
          About LEO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At LEO, we are committed to delivering high-quality news and articles that keep you informed
            about the world around you. Our mission is to provide accurate, timely, and engaging content
            that matters to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            What We Cover
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We cover a wide range of topics including technology, business, environment, health, sports,
            and science. Our team of dedicated journalists and writers work around the clock to bring you
            the latest updates and in-depth analysis.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Accuracy and integrity in reporting</li>
            <li>Diverse perspectives and balanced coverage</li>
            <li>Transparency and accountability</li>
            <li>Innovation in digital journalism</li>
            <li>Community engagement and dialogue</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Stay connected with LEO for the latest news and updates. Follow us on social media and
            subscribe to our newsletter to never miss an important story.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
