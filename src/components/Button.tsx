import type { ButtonTypeAttribute, MouseEventHandler } from '../types';

type ButtonProps = {
  type: ButtonTypeAttribute;
  label: string;
  onClick?: MouseEventHandler;
};

export default function Button({ type, label, onClick }: ButtonProps) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {label}
    </button>
  );
}
