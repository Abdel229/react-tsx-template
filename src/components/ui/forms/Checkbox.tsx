import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the checkbox.
   */
  label: string;
}

/**
 * Customizable checkbox component.
 *
 * @param {CheckboxProps} props - The checkbox's properties.
 * @returns {JSX.Element} The checkbox component.
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, id, ...props }, ref) => {
  return (
    <div className="flex items-center">
      <input 
        id={id}
        type="checkbox"
        ref={ref}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        {...props}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-700">{label}</label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;