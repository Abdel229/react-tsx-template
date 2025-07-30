import React from 'react';

/**
 * Application footer component.
 * Displays copyright information.
 *
 * @returns {JSX.Element} The footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-t mt-auto">
      <div className="container mx-auto px-4 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mon Super Projet. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
