import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@store/userStore';

/**
 * Protected route component.
 * Redirects the user to the login page if not authenticated.
 *
 * @returns {JSX.Element} The protected route component.
 */
const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;