import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card } from '../components';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@store/userStore';

/**
 * Login page of the application.
 * Allows users to log in with simulated email and password.
 *
 * @returns {JSX.Element} The login page.
 */
const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  /**
   * Handles the submission of the login form.
   * Simulates successful authentication and redirects the user.
   * @param {React.FormEvent} e The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful authentication
    if (email === 'test@example.com' && password === 'password') {
      login({ id: '1', email: email });
      navigate('/');
    } else {
      alert(t('incorrect_credentials'));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">{t('login_title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label={t('email_label')}
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('email_placeholder')}
            required
          />
          <Input 
            label={t('password_label')}
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('password_placeholder')}
            required
          />
          <Button type="submit" className="w-full">{t('login_button')}</Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;