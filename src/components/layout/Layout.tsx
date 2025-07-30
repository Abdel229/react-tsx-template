import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  /**
   * The child content to be displayed inside the layout.
   */
  children: React.ReactNode;
}

/**
 * Main layout component that provides a consistent structure to the application.
 * It includes a header, a footer, and a container for the main content.
 *
 * @param {LayoutProps} props - The component's properties.
 * @returns {JSX.Element} The layout component.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
