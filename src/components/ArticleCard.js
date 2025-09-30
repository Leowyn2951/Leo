import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <Link to={`/article/${article.id}`}>
        <div className={`relative ${featured ? 'h-96' : 'h-48'}`}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className={`font-bold text-gray-800 dark:text-gray-100 mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
