import type { ContactProps, FormEvent } from '../types';
import Form, { FormField } from './Form';
import '../styles/form.sass';

export default function ContactForm({
  setEditMode,
  data,
  setData
}: ContactProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const [name, email, phone] = [
      ...(form.querySelectorAll('.input') as NodeListOf<HTMLInputElement>)
    ].map((input) => input.value);

    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      setData!((prevState) => ({
        ...prevState,
        contact: { name, email, phone }
      }));

      setEditMode((prevState) => ({ ...prevState, contact: false }));
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormField
        id="name"
        label="Full Name"
        defaultValue={data.name}
        type="text"
        required
      />

      <FormField
        id="email"
        label="Email"
        defaultValue={data.email}
        type="email"
        required
      />

      <FormField
        id="phone"
        label="Phone Number"
        defaultValue={data.phone}
        type="tel"
        required
      />
    </Form>
  );
}
