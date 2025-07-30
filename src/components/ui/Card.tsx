import React from 'react';

interface CardProps {
  /**
   * The content to be displayed inside the card.
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes to apply to the card.
   */
  className?: string;
}

/**
 * Reusable card component for displaying content in a stylized container.
 *
 * @param {CardProps} props - The card's properties.
 * @returns {JSX.Element} The card component.
 */
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
