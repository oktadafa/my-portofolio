export interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  className?: string;
}

const INPUT_BASE =
  'w-full px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md text-body-md';

export const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  rows = 4,
  value,
  onChange,
  options = [],
  className = '',
}: FormFieldProps) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="font-code-md text-code-md text-on-surface">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${INPUT_BASE} resize-none`}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={INPUT_BASE}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={INPUT_BASE}
        />
      )}
    </div>
  );
};
