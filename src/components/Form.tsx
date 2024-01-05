import type { ReactNode, FormEventHandler, InputTypeAttribute } from '../types';
import Button from './Button';

type FormProps = {
  children: ReactNode;
  onSubmit: FormEventHandler;
};

type FormFieldProps = {
  id: string;
  label: string;
  type?: InputTypeAttribute;
};

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <form noValidate className="form" onSubmit={onSubmit}>
      {children}
      <Button type="submit" label="Submit" />
    </form>
  );
}

export function FormField({ id, label, type = 'text' }: FormFieldProps) {
  return (
    <label htmlFor={id} className="form__field">
      <span className="form__label">{label}</span>
      <input type={type} id={id} className="input form__input" />
    </label>
  );
}

export function FormDatesRange({ id, label }: FormFieldProps) {
  return (
    <div className="form__dates">
      <FormField id={`${id}-start`} label={`${label} Start`} type="date" />
      <FormField id={`${id}-end`} label={`${label} Start`} type="date" />
    </div>
  );
}
