import type { ReactNode, FormEventHandler, InputTypeAttribute } from '../types';
import Button from './Button';
import '../styles/form.sass';

type FormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler;
};

type FormFieldProps = {
  id: string;
  label: string;
  defaultValue: string;
  type?: InputTypeAttribute;
  required?: boolean;
};

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form noValidate className="form" onSubmit={onSubmit}>
      {children}
      <Button type="submit" label="Submit" />
    </form>
  );
}

export function FormField({
  id,
  label,
  defaultValue,
  type = 'text',
  required = false
}: FormFieldProps) {
  return (
    <label htmlFor={id} className="form__field">
      <span className="form__label">{label}</span>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        className="input form__input"
        required={required}
      />
    </label>
  );
}

// export function FormDatesRange({ id, label, defaultValue }: FormFieldProps) {
//   return (
//     <div className="form__dates">
//       <FormField id={`${id}-start`} label={`${label} Start`} defaultValue={def} type="date" />
//       <FormField id={`${id}-end`} label={`${label} Start`} type="date" />
//     </div>
//   );
// }
