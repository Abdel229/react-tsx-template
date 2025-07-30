import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@store/userStore';
import Button from '../ui/Button';

/**
 * Application header component.
 * It contains the logo, main navigation, a language switcher, and user authentication status.
 *
 * @returns {JSX.Element} The header component.
 */
const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated, logout } = useUserStore();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <nav className="space-x-4 flex items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"}>{t('home_link')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"}>{t('about_link')}</NavLink>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 ml-4">
              <span className="text-gray-700">Welcome, {user?.email}</span>
              <Button onClick={logout} variant="secondary" size="sm">Logout</Button>
            </div>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-600 font-semibold ml-4" : "text-gray-600 hover:text-blue-500 ml-4"}>{t('login_button')}</NavLink>
          )}

          <select 
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="ml-4 p-2 border rounded-md bg-gray-50 text-gray-700"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;