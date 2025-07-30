# Abdel229/react-template

![React Template Banner](https://via.placeholder.com/1200x400?text=Abdel229+React+Template)

A robust, modern, and highly opinionated React template designed to kickstart your web development projects with best practices, essential tools, and a clean architecture. This template aims to provide a solid foundation, allowing you to focus on building features rather than configuring your environment.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Core Concepts & Complex Logic](#core-concepts--complex-logic)
  - [Centralized Error Handling (React Toastify & Axios Interceptors)](#centralized-error-handling-react-toastify--axios-interceptors)
  - [Form Validation (React Hook Form & Zod)](#form-validation-react-hook-form--zod)
  - [Error Boundaries](#error-boundaries)
  - [Authentication Flow (Zustand)](#authentication-flow-zustand)
  - [Multi-language Support (i18next)](#multi-language-support-i18next)
  - [Code Quality (Prettier, ESLint, Husky, lint-staged)](#code-quality-prettier-eslint-husky-lint-staged)
- [Components](#components)
  - [Layout Components](#layout-components)
  - [UI Components](#ui-components)
  - [Form Components](#form-components)
- [Hooks](#hooks)
  - [Data Fetching Hook](#data-fetching-hook)
  - [Utility Hooks](#utility-hooks)
- [Contributing](#contributing)
- [License](#license)

## Features

This template comes packed with essential features and configurations:

-   ⚛️ **React 19**: Latest version of React for modern development.
-   ⚡ **Vite**: Blazing fast build tool and development server.
-   📜 **TypeScript**: Strongly typed JavaScript for better code quality and maintainability.
-   💨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
-   🎨 **DaisyUI**: Tailwind CSS component library for beautiful, ready-to-use UI elements.
-   🌐 **React Router DOM v6**: Declarative routing for React applications.
-   📊 **TanStack Query (React Query)**: Powerful data-fetching, caching, and state management for asynchronous data.
-   📝 **React Hook Form**: Performant, flexible, and extensible forms with easy validation.
-   🛡️ **Zod**: TypeScript-first schema declaration and validation library, integrated with React Hook Form.
-   🚨 **Centralized Error Handling**: Global API error handling with `react-toastify` for user feedback.
-   🐛 **Error Boundaries**: Catch and gracefully handle rendering errors in React components.
-   🔐 **Authentication State Management**: Global authentication state managed with [Zustand](https://zustand-demo.pmnd.rs/).
-   🗣️ **Multi-language Support**: Internationalization (i18n) with `react-i18next`.
-   ✨ **Prettier & ESLint**: Code formatting and linting for consistent code style.
-   🐶 **Husky & lint-staged**: Git hooks to ensure code quality before commits.
-   ⚙️ **Environment Variables**: Securely manage environment-specific configurations.
-   🧩 **Reusable Components**: A set of common UI and form components.
-   🎣 **Custom Hooks**: Useful utility hooks for common patterns.
-   💡 **JSDoc Comments**: Extensive documentation for components, hooks, and complex logic.

## Getting Started

Follow these steps to get your development environment set up.

### Prerequisites

Make sure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/en/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Abdel229/react-template.git
    cd react-template
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Prepare Husky Git hooks:**
    ```bash
    npm run prepare
    ```
    This command sets up the pre-commit hook to run linting and formatting checks.

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

5.  **Build for production:**
    ```bash
    npm install
    npm run build
    ```
    This command compiles the application for production deployment.

### Environment Variables

This project uses environment variables managed by Vite. They are loaded from `.env` files in the project root.

-   **`.env.template`**: This file is a template showing all required environment variables. **Do not rename this file.**
-   **`.env`**: Create a copy of `.env.template` and rename it to `.env`. Fill in your actual values here. **This file should be in your `.gitignore` and never committed to version control.**
-   **`.env.<mode>`**: For environment-specific variables (e.g., `.env.development`, `.env.production`).

**Example `.env` content:**

```dotenv
VITE_API_URL=http://localhost:8080/api
VITE_ANALYTICS_ID=your_analytics_id_here
```

**Important:**

-   Only variables prefixed with `VITE_` are exposed to your client-side code.
-   Access them in your code using `import.meta.env.VITE_YOUR_VARIABLE_NAME`.

## Project Structure

```
react-template/
├── .husky/                 # Git hooks configuration
├── public/                 # Static assets
│   └── locales/            # Translation files for i18next
│       ├── en/
│       └── fr/
├── src/
│   ├── api/                # API service definitions (e.g., postsApi.ts)
│   ├── assets/             # Static assets (images, icons)
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout-specific components (Header, Footer, Layout)
│   │   ├── ui/             # Generic UI components (Button, Card, Spinner, Modal)
│   │   │   └── forms/      # Form-specific UI components (Input, Checkbox, Select, etc.)
│   │   └── utils/          # Utility components (ErrorBoundary)
│   ├── config/             # Application configuration (e.g., apiClient.ts)
│   ├── context/            # (DEPRECATED - replaced by Zustand store) React Context providers
│   ├── hooks/              # Custom React hooks
│   │   └── utils/          # Utility hooks (useDebounce, useLocalStorage, etc.)
│   ├── locales/            # (DEPRECATED - moved to public/locales) Translation files
│   ├── pages/              # Page-level components (HomePage, LoginPage)
│   ├── router/             # React Router configuration (index.tsx, ProtectedRoute.tsx)
│   ├── store/              # Zustand stores for global state management
│   ├── types/              # TypeScript type definitions
│   ├── App.css             # Global application styles
│   ├── App.tsx             # Main application component
│   ├── i18n.ts             # i18next configuration
│   ├── index.css           # Tailwind CSS imports and base styles
│   ├── main.tsx            # Entry point of the React application
│   └── vite-env.d.ts       # Vite environment type declarations
├── .env.template           # Environment variables template
├── .gitignore              # Files/folders to ignore in Git
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration (for Tailwind CSS)
├── README.md               # Project documentation (this file)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript configuration for application code
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js environment
└── vite.config.ts          # Vite build configuration
```

## Key Technologies

-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Framework**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/en/main)
-   **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/)
-   **Schema Validation**: [Zod](https://zod.dev/)
-   **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Internationalization**: [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/)
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
-   **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/okonet/lint-staged)

## Core Concepts & Complex Logic

This section details some of the more advanced patterns and configurations implemented in this template.

### Centralized Error Handling (React Toastify & Axios Interceptors)

API errors are handled globally using Axios interceptors and displayed via `react-toastify`. This prevents repetitive `try...catch` blocks around every API call and provides a consistent user experience for error messages.

-   **Location**: `src/config/apiClient.ts`
-   **How it works**: The `apiClient` (an Axios instance) has a response interceptor. If an API call returns an error (e.g., 4xx, 5xx status codes, or network issues), the interceptor catches it, determines a user-friendly message based on the status code, and displays it as a toast notification. The error is then re-thrown so that individual components can still handle specific error cases if needed.

```typescript
// src/config/apiClient.ts
import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Using environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = 'An unexpected error occurred';

    if (error.response) {
      // Server responded with a status other than 2xx
      switch (error.response.status) {
        case 400: errorMessage = 'Bad Request. Please check your input.'; break;
        case 401: errorMessage = 'Unauthorized. Please log in again.'; break;
        case 403: errorMessage = 'Forbidden. You do not have access.'; break;
        case 404: errorMessage = 'Resource not found.'; break;
        case 500: case 502: case 503: errorMessage = 'Server error. Please try again later.'; break;
        default: errorMessage = error.response.data?.message || errorMessage;
      }
    } else if (error.request) {
      // Request was made but no response was received
      errorMessage = 'Network error. Please check your internet connection.';
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = error.message;
    }

    toast.error(errorMessage);
    return Promise.reject(error); // Re-throw the error for component-specific handling
  }
);

export default apiClient;
```

### Form Validation (React Hook Form & Zod)

Forms are managed using `react-hook-form` for performance and flexibility, with validation schemas defined by `Zod` for robust, TypeScript-first data validation.

-   **Location**: `src/pages/HomePage.tsx` (for demonstration), `src/components/ui/forms/` (for form components)
-   **How it works**: A Zod schema defines the shape and validation rules for form data. This schema is then passed to `useForm` from `react-hook-form` via the `zodResolver`. Error messages are automatically propagated to the form components (`Input`, `Select`, etc.) and displayed to the user.

```typescript
// src/pages/HomePage.tsx (excerpt)
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define your validation schema with Zod
const formSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  country: z.string().min(1, "Please select a country"),
  notification: z.enum(['email', 'sms']).refine(val => val !== undefined, { message: "Please choose a notification method" }),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});

type FormData = z.infer<typeof formSchema>; // Infer TypeScript type from Zod schema

const HomePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema), // Integrate Zod with React Hook Form
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Handle form submission (e.g., send to API)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input 
        label="Email"
        id="email"
        type="email"
        {...register('email')}
        error={errors.email?.message} // Display error message
      />
      {/* Other form fields */}
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

### Error Boundaries

Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.

-   **Location**: `src/components/utils/ErrorBoundary.tsx`, `src/App.tsx`
-   **How it works**: The `ErrorBoundary` component is a class component that implements `static getDerivedStateFromError` and `componentDidCatch`. It's wrapped around the main `AppRouter` in `App.tsx` to provide a global safety net for rendering errors.

```typescript
// src/App.tsx (excerpt)
import { ErrorBoundary } from './components'; // Imported from src/components/index.ts

function App() {
  return (
    <ErrorBoundary>
      {/* Your main application content, e.g., router */}
      <AppRouter />
      {/* ToastContainer for global notifications */}
      <ToastContainer />
    </ErrorBoundary>
  );
}
```

### Authentication Flow (Zustand)

Global authentication state is managed using a Zustand store, providing a lightweight and performant solution for user login/logout and protected routes.

-   **Location**: `src/store/userStore.ts`, `src/pages/LoginPage.tsx`, `src/components/layout/Header.tsx`, `src/router/ProtectedRoute.tsx`
-   **How it works**: 
    -   `src/store/userStore.ts` defines the Zustand store, managing `user` data and `isAuthenticated` status. It includes `login` and `logout` actions and persists state to `localStorage`.
    -   `LoginPage.tsx` uses the `login` action from `useUserStore` to authenticate the user.
    -   `Header.tsx` subscribes to `user` and `isAuthenticated` from `useUserStore` to display user information and a logout button.
    -   `ProtectedRoute.tsx` checks the `isAuthenticated` status from `useUserStore` to determine if a user can access a route.

```typescript
// src/store/userStore.ts (excerpt)
import { create } from 'zustand';

interface UserState {
  user: { id: string; email: string } | null;
  isAuthenticated: boolean;
  login: (userData: { id: string; email: string }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    set({ user: userData, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    set({ user: null, isAuthenticated: false });
  },
}));

// src/pages/LoginPage.tsx (excerpt)
import { useUserStore } from '../store/userStore';

const LoginPage: React.FC = () => {
  const login = useUserStore((state) => state.login);
  // ... form submission calls login({ id: '1', email: email });
};

// src/router/ProtectedRoute.tsx (excerpt)
import { useUserStore } from '../store/userStore';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
```

### Multi-language Support (i18next)

This template includes internationalization (i18n) capabilities using `i18next` and `react-i18next`. Translations are loaded from JSON files, and the user's language is automatically detected.

-   **Location**: `src/i18n.ts`, `public/locales/`, `src/main.tsx`, `src/components/layout/Header.tsx`, `src/pages/HomePage.tsx`, `src/pages/LoginPage.tsx`
-   **How it works**: 
    -   `src/i18n.ts` configures `i18next` to load translations from `public/locales/{{lng}}/translation.json` and detect the user's language from the browser.
    -   `src/main.tsx` wraps the application with `Suspense` to handle asynchronous loading of translation files.
    -   Components use the `useTranslation` hook from `react-i18next` to access translation functions (`t`) and change the language (`i18n.changeLanguage`).

```typescript
// src/i18n.ts (excerpt)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    // ... other configurations
  });

// src/components/layout/Header.tsx (excerpt)
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      {/* ... */}
      <nav>
        <NavLink to="/">{t('home_link')}</NavLink>
        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </nav>
    </header>
  );
};
```

### Code Quality (Prettier, ESLint, Husky, lint-staged)

This template enforces code quality and consistency using a combination of tools:

-   **ESLint**: Static code analysis to find problematic patterns and enforce coding style.
-   **Prettier**: An opinionated code formatter that ensures consistent code style across the project.
-   **Husky**: Git hooks manager. It's configured to run `lint-staged` before every commit.
-   **lint-staged**: Runs linters and formatters only on Git staged files, making the pre-commit checks fast and efficient.

-   **Configuration**: 
    -   `.eslintrc.js` (for ESLint rules)
    -   `.prettierrc.json` (for Prettier rules)
    -   `package.json` (for `lint-staged` configuration and `prepare` script)
    -   `.husky/pre-commit` (Git hook)

-   **How it works**: When you run `git commit`, Husky intercepts the command and executes the `pre-commit` hook. This hook runs `lint-staged`, which in turn executes ESLint (with `--fix` to auto-fix issues) and Prettier (with `--write` to auto-format) on all files that are currently staged for commit. If any linting errors or formatting issues cannot be automatically fixed, the commit will fail, ensuring that only high-quality code enters your repository.

## Components

This template provides a set of reusable components, organized into `layout`, `ui`, and `forms` categories.

### Layout Components

Located in `src/components/layout/`.

#### `Layout`

```typescript
// src/components/layout/Layout.tsx
interface LayoutProps {
  /**
   * The child content to be displayed inside the layout.
   */
  children: React.ReactNode;
}

/**
 * Main layout component that provides a consistent structure to the application.
 * It includes a header, a footer, and a container for the main content.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => { /* ... */ };
```

**Usage Example:**

```typescript jsx
// src/router/index.tsx
import { Layout } from '../components';

const AppLayout = () => (
  <Layout>
    <Outlet /> {/* Renders child routes */}
  </Layout>
);
```

#### `Header`

```typescript
// src/components/layout/Header.tsx
/**
 * Application header component.
 * It contains the logo, main navigation and a language switcher.
 */
const Header: React.FC = () => { /* ... */ };
```

**Usage Example:** (Automatically included in `Layout`)

#### `Footer`

```typescript
// src/components/layout/Footer.tsx
/**
 * Application footer component.
 * Displays copyright information.
 */
const Footer: React.FC = () => { /* ... */ };
```

**Usage Example:** (Automatically included in `Layout`)

### UI Components

Located in `src/components/ui/`.

#### `Button`

```typescript
// src/components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * Indicates if the button is in a loading state, disabling the button and showing loading text.
   * @default false
   */
  isLoading?: boolean;
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable button component with different variants and a loading state.
 */
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading = false, size = 'md', ...props }) => { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { Button } from '../components';

<Button onClick={() => alert('Clicked!')}>Click Me</Button>
<Button variant="secondary" isLoading>Loading...</Button>
<Button variant="danger">Delete</Button>
<Button size="sm">Small Button</Button>
```

#### `Card`

```typescript
// src/components/ui/Card.tsx
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
 */
const Card: React.FC<CardProps> = ({ children, className = '' }) => { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { Card } from '../components';

<Card className="max-w-sm mx-auto">
  <h2 className="text-xl font-bold">Card Title</h2>
  <p>This is some content inside a card.</p>
</Card>
```

#### `Spinner`

```typescript
// src/components/ui/Spinner.tsx
/**
 * Simple spinner (loading indicator) component.
 */
const Spinner: React.FC = () => { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { Spinner } from '../components';

{isLoading && <Spinner />}
```

#### `Modal`

```typescript
// src/components/ui/Modal.tsx
interface ModalProps {
  /**
   * Indicates whether the modal is open or closed.
   */
  isOpen: boolean;
  /**
   * Callback function called when the modal should be closed.
   */
  onClose: () => void;
  /**
   * The title of the modal.
   */
  title: string;
  /**
   * The content to be displayed inside the modal body.
   */
  children: React.ReactNode;
}

/**
 * Customizable modal component.
 * It appears as an overlay and can be closed by clicking outside or pressing the Escape key.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { useState } from 'react';
import { Modal, Button } from '../components';

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Awesome Modal">
        <p>This is the content of my modal.</p>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>
    </>
  );
};
```

### Form Components

Located in `src/components/ui/forms/`. Designed to work seamlessly with `react-hook-form`.

#### `Input`

```typescript
// src/components/ui/forms/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the input field.
   */
  label: string;
  /**
   * Error message to display below the input field.
   */
  error?: string;
}

/**
 * Customizable input field component.
 * Handles different input types, password show/hide toggle, and error messages.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, id, type = 'text', error, ...props }, ref) => { /* ... */ });
```

**Usage Example (with React Hook Form):**

```typescript jsx
import { useForm } from 'react-hook-form';
import { Input } from '../components';

const MyForm = () => {
  const { register, formState: { errors } } = useForm();

  return (
    <Input 
      label="Username"
      id="username"
      type="text"
      {...register('username', { required: 'Username is required' })}
      error={errors.username?.message as string}
    />
  );
};
```

#### `Textarea`

```typescript
// src/components/ui/forms/Textarea.tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The label for the textarea field.
   */
  label?: string;
}

/**
 * Customizable multi-line text input (Textarea) component.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, id, ...props }, ref) => { /* ... */ });
```

**Usage Example (with React Hook Form):**

```typescript jsx
import { useForm } from 'react-hook-form';
import { Textarea } from '../components';

const MyForm = () => {
  const { register } = useForm();

  return (
    <Textarea 
      label="Your Message"
      id="message"
      {...register('message')}
    />
  );
};
```

#### `Label`

```typescript
// src/components/ui/forms/Label.tsx
/**
 * Label component for form elements.
 */
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(({ className, ...props }, ref) => { /* ... */ });
```

**Usage Example:** (Typically used internally by `Input`, `Textarea`, etc., but can be used standalone)

```typescript jsx
import { Label } from '../components';

<Label htmlFor="myField">My Field</Label>
<input id="myField" type="text" />
```

#### `Checkbox`

```typescript
// src/components/ui/forms/Checkbox.tsx
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the checkbox.
   */
  label: string;
}

/**
 * Customizable checkbox component.
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, id, ...props }, ref) => { /* ... */ });
```

**Usage Example (with React Hook Form):**

```typescript jsx
import { useForm } from 'react-hook-form';
import { Checkbox } from '../components';

const MyForm = () => {
  const { register, formState: { errors } } = useForm();

  return (
    <Checkbox 
      label="I agree to the terms and conditions"
      id="terms"
      {...register('terms', { required: 'You must accept the terms' })}
    />
  );
};
```

#### `RadioGroup`

```typescript
// src/components/ui/forms/RadioGroup.tsx
interface RadioOption {
  /**
   * The value of the radio option.
   */
  value: string;
  /**
   * The label displayed for the radio option.
   */
  label: string;
}

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the radio button group.
   */
  label: string;
  /**
   * An array of options for the radio button group.
   */
  options: RadioOption[];
  /**
   * The name of the radio button group (used to group radios).
   */
  name: string;
}

/**
 * Customizable radio button group (RadioGroup) component.
 */
const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(({ label, options, name, ...props }, ref) => { /* ... */ });
```

**Usage Example (with React Hook Form):**

```typescript jsx
import { useForm } from 'react-hook-form';
import { RadioGroup } from '../components';

const MyForm = () => {
  const { register } = useForm();

  const notificationOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
  ];

  return (
    <RadioGroup 
      label="Notification Method"
      name="notification"
      options={notificationOptions}
      {...register('notification', { required: 'Please choose a method' })}
    />
  );
};
```

#### `Select`

```typescript
// src/components/ui/forms/Select.tsx
interface SelectOption {
  /**
   * The value of the select option.
   */
  value: string | number;
  /**
   * The label displayed for the select option.
   */
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * The label for the select field.
   */
  label: string;
  /**
   * An array of options for the select field.
   */
  options: SelectOption[];
  /**
   * Error message to display below the select field.
   */
  error?: string;
}

/**
 * Customizable select (dropdown) field component.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ label, id, options, ...props }, ref) => { /* ... */ });
```

**Usage Example (with React Hook Form):**

```typescript jsx
import { useForm } from 'react-hook-form';
import { Select } from '../components';

const MyForm = () => {
  const { register, formState: { errors } } = useForm();

  const countryOptions = [
    { value: '', label: '-- Select a country --' },
    { value: 'fr', label: 'France' },
    { value: 'us', label: 'United States' },
  ];

  return (
    <Select 
      label="Country"
      id="country"
      options={countryOptions}
      {...register('country', { required: 'Country is required' })}
      error={errors.country?.message as string}
    />
  );
};
```

## Hooks

This template includes several custom hooks for common functionalities.

### Data Fetching Hook

#### `usePosts`

```typescript
// src/hooks/usePosts.ts
/**
 * Custom hook to fetch a list of posts using TanStack Query.
 *
 * @returns {object} An object containing post data, loading state, and error state.
 */
export const usePosts = () => { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { usePosts } from '../hooks'; // Imported from src/hooks/index.ts
import { Spinner, Card } from '../components';

const HomePage = () => {
  const { data: posts, isLoading, isError, error } = usePosts();

  if (isLoading) return <Spinner />;
  if (isError) return <div className="text-red-500">Error: {error?.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <Card key={post.id}>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
};
```

### Utility Hooks

Located in `src/hooks/utils/`.

#### `useDebounce`

```typescript
// src/hooks/utils/useDebounce.ts
/**
 * Custom hook to debounce a value.
 * Useful for delaying function execution until a value stops changing for a certain delay.
 *
 * @template T The type of the value to debounce.
 * @param {T} value The value to debounce.
 * @param {number} delay The delay in milliseconds after which the debounced value is updated.
 * @returns {T} The debounced value.
 */
function useDebounce<T>(value: T, delay: number): T { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { useState } from 'react';
import { useDebounce } from '../hooks';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // This effect will only run after 500ms of inactivity in searchTerm
  React.useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Performing search for:', debouncedSearchTerm);
      // Trigger API call or search logic here
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
```

#### `useLocalStorage`

```typescript
// src/hooks/utils/useLocalStorage.ts
/**
 * Custom hook for interacting with the browser's local storage.
 *
 * @template T The type of the value to store.
 * @param {string} key The key under which the value will be stored in localStorage.
 * @param {T} initialValue The initial value to use if nothing is found in localStorage.
 * @returns {[T, (value: T | ((val: T) => T)) => void]} An array containing the stored value and a function to update it.
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { useLocalStorage } from '../hooks';
import { Button } from '../components';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('app-theme', 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
};
```

#### `useMediaQuery`

```typescript
// src/hooks/utils/useMediaQuery.ts
/**
 * Custom hook to detect if a CSS media query matches.
 * Useful for adapting the user interface based on screen size or other characteristics.
 *
 * @param {string} query The media query string (e.g., '(min-width: 768px)').
 * @returns {boolean} True if the media query matches, false otherwise.
 */
function useMediaQuery(query: string): boolean { /* ... */ };
```

**Usage Example:**

```typescript jsx
import { useMediaQuery } from '../hooks';

const ResponsiveComponent = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div>
      {isLargeScreen ? (
        <p>This content is visible on large screens.</p>
      ) : (
        <p>This content is visible on smaller screens.</p>
      )}
    </div>
  );
};
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
