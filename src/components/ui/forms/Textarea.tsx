import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The label for the textarea field.
   */
  label?: string;
}

/**
 * Customizable multi-line text input (Textarea) component.
 *
 * @param {TextareaProps} props - The textarea's properties.
 * @returns {JSX.Element} The textarea component.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, id, ...props }, ref) => {
  return (
    <div>
      {label && <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <textarea 
        id={id}
        ref={ref}
        rows={4}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...props}
      ></textarea>
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
