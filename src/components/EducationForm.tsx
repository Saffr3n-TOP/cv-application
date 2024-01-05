import type { EducationProps, FormEvent } from '../types';
import Form, { FormField, FormDatesRange } from './Form';

export default function EducationForm({
  setEditMode,
  data,
  setData
}: EducationProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const [school, degree, start, end] = [
      ...(form.querySelectorAll('.input') as NodeListOf<HTMLInputElement>)
    ].map((input) => input.value);

    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      setData!((prevState) => ({
        ...prevState,
        education: { school, degree, start, end }
      }));

      setEditMode((prevState) => ({ ...prevState, education: false }));
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormField
        id="school"
        label="School"
        defaultValue={data.school}
        type="text"
        required
      />

      <FormField
        id="degree"
        label="Degree"
        defaultValue={data.degree}
        type="text"
        required
      />

      <FormDatesRange
        id="education"
        label="Education"
        defaultStart={data.start}
        defaultEnd={data.end}
      />
    </Form>
  );
}
