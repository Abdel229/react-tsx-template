import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

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
 *
 * @param {InputProps} props - The input field's properties.
 * @returns {JSX.Element} The input field component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  id, 
  type = 'text', 
  error, 
  className, 
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input 
          id={id}
          type={isPassword && showPassword ? 'text' : type}
          ref={ref}
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-2 focus:outline-none block w-full p-2.5 ${errorClasses} ${isPassword ? 'pr-10' : ''} ${className}`}
          {...props} 
        />
        {isPassword && (
          <button 
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
