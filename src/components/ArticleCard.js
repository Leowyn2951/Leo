import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const ArticleCard = ({ article, featured = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const img = new Image();
      img.src = article.image;
      img.onload = () => setImageLoaded(true);
    }
  }, [isInView, article.image]);

  const getCategoryGradient = (category) => {
    const gradients = {
      Technology: 'from-purple-600 to-blue-600',
      Sports: 'from-orange-600 to-red-600',
      Entertainment: 'from-pink-600 to-purple-600',
      Lifestyle: 'from-green-600 to-teal-600',
      Business: 'from-blue-600 to-indigo-600',
      Health: 'from-emerald-600 to-green-600',
      Environment: 'from-lime-600 to-green-600',
      Science: 'from-cyan-600 to-blue-600'
    };
    return gradients[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <Link to={`/article/${article.id}`}>
        <div className={`relative overflow-hidden ${featured ? 'h-96' : 'h-56'}`}>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
          )}
          <motion.img
            src={article.image}
            alt={article.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <motion.div
            className="absolute top-4 left-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`bg-gradient-to-r ${getCategoryGradient(article.category)} text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg`}>
              {article.category}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>

        <div className="p-6">
          <motion.h3
            className={`font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${getCategoryGradient(article.category)} transition-all duration-300 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
          >
            {article.title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold text-xs">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium">{article.author}</span>
            </div>
            <span className="text-gray-500 dark:text-gray-500">
              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
