import React from 'react';

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
 *
 * @param {SelectProps} props - The select field's properties.
 * @returns {JSX.Element} The select field component.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ label, id, options, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <select 
        id={id}
        ref={ref}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...props}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
});

Select.displayName = 'Select';

export default Select;