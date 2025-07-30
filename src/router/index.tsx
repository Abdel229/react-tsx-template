import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { Layout } from '../components';
import ProtectedRoute from './ProtectedRoute';

/**
 * Layout component for application routes.
 * Wraps routes with the `Layout` component.
 *
 * @returns {JSX.Element} The application layout component.
 */
const AppLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

/**
 * Application router configuration.
 * Defines public and protected routes.
 */
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          // Add other protected routes here
        ],
      },
      // Add other public routes here if necessary
    ],
  },
]);

/**
 * Main application router component.
 * Provides the configured router to the React application.
 *
 * @returns {JSX.Element} The router provider.
 */
const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;