import React from 'react';

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
 *
 * @param {RadioGroupProps} props - The radio button group's properties.
 * @returns {JSX.Element} The radio button group component.
 */
const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(({ label, options, name, ...props }, ref) => {
  return (
    <fieldset>
      <legend className="block mb-2 text-sm font-medium text-gray-700">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input 
              id={`${name}-${option.value}`}
              type="radio"
              name={name}
              value={option.value}
              ref={ref} // Note: ref is passed to all radio inputs
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              {...props}
            />
            <label htmlFor={`${name}-${option.value}`} className="ml-2 text-sm font-medium text-gray-700">{option.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;