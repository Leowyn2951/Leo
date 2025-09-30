import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ size = 'md', fullScreen = false, text = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const dotVariants = {
    animate: (i) => ({
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * 0.2,
      },
    }),
  };

  const LoaderContent = () => (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className={`${sizes[size]} border-4 border-primary-200 border-t-primary-600 rounded-full`}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 dark:text-gray-400 text-lg"
        >
          {text}
        </motion.p>
      )}
      <div className="flex space-x-2 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={dotVariants}
            animate="animate"
            className="w-2 h-2 bg-primary-600 rounded-full"
          />
        ))}
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center z-50"
      >
        <LoaderContent />
      </motion.div>
    );
  }

  return <LoaderContent />;
};

export default Loader;
