import type { EducationProps, Data, FormEvent } from '../types';
import Form, { FormField, FormDatesRange } from './Form';

export default function EducationForm({
  setEditMode,
  data,
  setData
}: EducationProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const fieldsets = form.querySelectorAll(
      '.form__set'
    ) as NodeListOf<HTMLFieldSetElement>;

    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      const data: Data['education'] = [];

      fieldsets.forEach((set) => {
        const [school, degree, start, end] = [
          ...(set.querySelectorAll('.input') as NodeListOf<HTMLInputElement>)
        ].map((input) => input.value);

        data.push({ school, degree, start, end });
      });

      setData!((prevState) => ({ ...prevState, education: data }));
      setEditMode((prevState) => ({ ...prevState, education: false }));
    }
  };

  const onAdd = () => {
    setData!((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        { school: '', degree: '', start: '', end: '' }
      ]
    }));
  };

  return (
    <Form onSubmit={onSubmit}>
      {data.map((school, i) => (
        <>
          <fieldset className="form__set">
            <FormField
              id={`school-${i + 1}`}
              label="School"
              defaultValue={school.school}
              type="text"
              required
            />
            <FormField
              id={`degree-${i + 1}`}
              label="Degree"
              defaultValue={school.degree}
              type="text"
              required
            />
            <FormDatesRange
              id={`education-${i + 1}`}
              label="Education"
              defaultStart={school.start}
              defaultEnd={school.end}
            />
          </fieldset>

          <hr />
        </>
      ))}

      <button type="button" className="button button_small" onClick={onAdd}>
        Add
      </button>

      <hr />
    </Form>
  );
}
