import React from 'react'
import PropTypes from 'prop-types'

/**
 * Reusable card content
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered in card
 * @param {string}[props.className=''] - Additional css to apply to card
 * @returns {JSX.Element} card component.
 */

const Card = ({ children, className = '', ...rest}) => {
     return (
    <div
      className={`rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-sm transition-colors ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Card;