import type { GlobalProps, FormEvent } from '../types';
import Form, { FormField } from './Form';
import '../styles/form.sass';

export default function ContactForm({ setEditMode }: GlobalProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEditMode((prevState) => ({ ...prevState, contact: false }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormField id="name" label="Full Name" type="text" />
      <FormField id="email" label="Email" type="email" />
      <FormField id="phone" label="Phone Number" type="tel" />
    </Form>
  );
}
