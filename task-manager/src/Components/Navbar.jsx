import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 * Navbar component for application navigation
 * @param {Object} props - Component props
 * @param {string} props.title - Application title/brand name
 * @param {string} props.variant - Navbar variant (default, compact, transparent)
 * @param {Array} props.navItems - Array of navigation items {text, href, active, onClick}
 * @param {React.ReactNode} props.rightContent - Content for right side of navbar
 * @param {boolean} props.showThemeToggle - Whether to show dark/light mode toggle
 * @param {function} props.onThemeToggle - Theme toggle handler
 * @param {boolean} props.isDarkMode - Current theme state
 * @param {boolean} props.sticky - Whether navbar should be sticky
 * @param {React.ReactNode} props.children - Custom navbar content
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = ({
  title = 'PLP Task Manager',
  variant = 'default',
  navItems = [],
  rightContent,
  showThemeToggle = true,
  onThemeToggle,
  isDarkMode = false,
  sticky = false,
  children,
  className = '',
  ...rest
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700';
  
  // Variant classes
  const variantClasses = {
    default: 'shadow-sm',
    compact: 'shadow-sm py-2',
    transparent: 'bg-transparent dark:bg-transparent border-transparent',
  };
  
  // Sticky classes
  const stickyClasses = sticky ? 'sticky top-0 z-50' : '';
  
  // Combine classes
  const navbarClasses = `${baseClasses} ${variantClasses[variant]} ${stickyClasses} ${className}`;
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    if (onThemeToggle) {
      onThemeToggle();
    }
  };

  return (
    <nav className={navbarClasses} {...rest}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${variant === 'compact' ? 'h-12' : 'h-16'}`}>
          {/* Left side - Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {title}
              </h1>
            </div>
          </div>

          {/* Center - Navigation Items (Desktop) */}
          {navItems.length > 0 && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={item.onClick}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Right side - Theme toggle and custom content */}
          <div className="hidden md:flex items-center space-x-4">
            {rightContent}
            
            {showThemeToggle && (
              <Button
                variant="secondary"
                size="sm"
                onClick={handleThemeToggle}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <span className="text-yellow-500">☀️</span>
                ) : (
                  <span className="text-gray-700">🌙</span>
                )}
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              {showThemeToggle && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleThemeToggle}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <span className="text-yellow-500">☀️</span>
                  ) : (
                    <span className="text-gray-700">🌙</span>
                  )}
                </Button>
              )}
              
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Custom children content */}
        {children && (
          <div className="mt-4 pb-4">
            {children}
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && navItems.length > 0 && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) item.onClick(e);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.active
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {item.text}
              </a>
            ))}
            
            {/* Mobile right content */}
            {rightContent && (
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="px-3">
                  {rightContent}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'compact', 'transparent']),
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
      active: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
  rightContent: PropTypes.node,
  showThemeToggle: PropTypes.bool,
  onThemeToggle: PropTypes.func,
  isDarkMode: PropTypes.bool,
  sticky: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Navbar;