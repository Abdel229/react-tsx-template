import React from 'react';

/**
 * Label component for form elements.
 *
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props - The label's properties.
 * @returns {JSX.Element} The label component.
 */
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`block text-sm font-medium text-gray-700 ${className}`}
    {...props}
  />
));

Label.displayName = 'Label';

export default Label;
