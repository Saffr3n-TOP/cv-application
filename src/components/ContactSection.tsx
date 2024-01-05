import type { GlobalProps } from '../types';
import Section, { SectionItem } from './Section';

export default function ContactSection({ setEditMode }: GlobalProps) {
  const onEdit = () => {
    setEditMode((prevState) => ({ ...prevState, contact: true }));
  };

  return (
    <Section onEdit={onEdit}>
      <SectionItem label="Full Name" data="Temp Name" />
      <SectionItem label="Email" data="temp@mail.xyz" />
      <SectionItem label="Phone Number" data="5555-555-555" />
    </Section>
  );
}
