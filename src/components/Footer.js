import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">LEO</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your trusted source for news and articles. Stay informed with the latest updates.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Technology</li>
              <li className="text-gray-600 dark:text-gray-400">Business</li>
              <li className="text-gray-600 dark:text-gray-400">Environment</li>
              <li className="text-gray-600 dark:text-gray-400">Health</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2025 LEO News. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
