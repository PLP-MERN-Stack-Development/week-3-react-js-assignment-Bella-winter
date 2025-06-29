import React from 'react';
import PropTypes from 'prop-types';

/**
 * Footer component for the application
 * @param {Object} props - Component props
 * @param {string} props.variant - Footer variant (simple, detailed, minimal)
 * @param {string} props.appName - Application name to display
 * @param {string} props.version - Application version
 * @param {Array} props.links - Array of link objects {text, href, external}
 * @param {Array} props.socialLinks - Array of social media links {platform, href, icon}
 * @param {string} props.copyrightText - Custom copyright text
 * @param {boolean} props.showYear - Whether to show current year
 * @param {React.ReactNode} props.children - Custom footer content
 * @returns {JSX.Element} - Footer component
 */
const Footer = ({
  variant = 'simple',
  appName = 'PLP Task Manager',
  version,
  links = [],
  socialLinks = [],
  copyrightText,
  showYear = true,
  children,
  className = '',
  ...rest
}) => {
  const currentYear = new Date().getFullYear();
  
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto';
  
  // Variant classes
  const variantClasses = {
    simple: 'py-4',
    detailed: 'py-8',
    minimal: 'py-2',
  };
  
  // Default copyright text
  const defaultCopyright = copyrightText || 
    `© ${showYear ? currentYear : ''} ${appName}. All rights reserved.`.trim();
  
  // Combine classes
  const footerClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  // Render simple footer
  if (variant === 'simple' || variant === 'minimal') {
    return (
      <footer className={footerClasses} {...rest}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ? (
            children
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {defaultCopyright}
              </p>
              {version && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Version {version}
                </p>
              )}
            </div>
          )}
        </div>
      </footer>
    );
  }
  
  // Render detailed footer
  return (
    <footer className={footerClasses} {...rest}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children ? (
          children
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* App Info Section */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {appName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                A powerful task management application to help you stay organized and productive.
              </p>
              {version && (
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Version {version}
                </p>
              )}
            </div>
            
            {/* Quick Links Section */}
            {links.length > 0 && (
              <div className="col-span-1">
                <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {link.text}
                        {link.external && (
                          <span className="ml-1 text-xs">↗</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Social Links or Contact Section */}
            <div className="col-span-1">
              {socialLinks.length > 0 ? (
                <>
                  <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Connect
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        aria-label={social.platform}
                      >
                        {social.icon || social.platform}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">
                    Support
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Need help? Contact us for support and feedback.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
        
        {/* Bottom Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {defaultCopyright}
            </p>
            <div className="mt-2 sm:mt-0 flex space-x-4">
              <a
                href="#privacy"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  variant: PropTypes.oneOf(['simple', 'detailed', 'minimal']),
  appName: PropTypes.string,
  version: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ),
  copyrightText: PropTypes.string,
  showYear: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Footer;