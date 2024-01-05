import type { ContactProps } from '../types';
import Section, { SectionItem } from './Section';

export default function ContactSection({ setEditMode, data }: ContactProps) {
  const onEdit = () => {
    setEditMode((prevState) => ({ ...prevState, contact: true }));
  };

  return (
    <Section onEdit={onEdit}>
      <SectionItem label="Full Name" data={data.name} />
      <SectionItem label="Email" data={data.email} />
      <SectionItem label="Phone Number" data={data.phone} />
    </Section>
  );
}
