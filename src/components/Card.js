import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverAnimation = hover ? { y: -5 } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hoverAnimation}
      onClick={onClick}
      className={`${baseStyles} ${paddingStyles[padding]} ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
