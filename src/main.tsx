import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';

/* CSS Link */
import './index.css';

/** Route */
import router from '@/routes';

/** Environment Variables */
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


/* Routes */
if (!PUBLISHABLE_KEY){
  throw new Error('Missing Clerk Publishable Key')
}

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
