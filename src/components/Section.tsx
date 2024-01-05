import { ReactNode, MouseEventHandler } from '../types';
import Button from './Button';
import '../styles/section.sass';

type SectionProps = {
  children: ReactNode;
  onEdit: MouseEventHandler;
};

type SectionItemProps = {
  label: string;
  data: string;
};

export default function Section({ children, onEdit }: SectionProps) {
  return (
    <dl className="section">
      {children}
      <Button type="button" label="Edit" onClick={onEdit} />
    </dl>
  );
}

export function SectionItem({ label, data }: SectionItemProps) {
  return (
    <li key={label} className="section__item">
      <dt className="section__label">{label}</dt>
      <dd className="section__data">{data}</dd>
    </li>
  );
}
