import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App.tsx';
import './i18n'; // Import i18n configuration

// Example of using VITE_ANALYTICS_ID (if you had an analytics setup)
// if (import.meta.env.VITE_ANALYTICS_ID) {
//   console.log('Analytics ID:', import.meta.env.VITE_ANALYTICS_ID);
//   // Initialize your analytics library here
// }

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading application...</div>}> {/* Add Suspense for i18n */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
);
