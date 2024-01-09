import type { PracticeProps, Data, FormEvent } from '../types';
import Form, { FormField, FormDatesRange } from './Form';

export default function PracticeForm({
  setEditMode,
  data,
  setData
}: PracticeProps) {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const fieldsets = form.querySelectorAll(
      '.form__set'
    ) as NodeListOf<HTMLFieldSetElement>;

    if (!form.checkValidity()) {
      form.reportValidity();
    } else {
      const data: Data['practice'] = [];

      fieldsets.forEach((set) => {
        const [company, title, description, start, end] = [
          ...(set.querySelectorAll('.input') as NodeListOf<HTMLInputElement>)
        ].map((input) => input.value);

        data.push({ company, title, description, start, end });
      });

      setData!((prevState) => ({ ...prevState, practice: data }));
      setEditMode((prevState) => ({ ...prevState, practice: false }));
    }
  };

  const onAdd = () => {
    setData!((prevState) => ({
      ...prevState,
      practice: [
        ...prevState.practice,
        { company: '', title: '', description: '', start: '', end: '' }
      ]
    }));
  };

  return (
    <Form onSubmit={onSubmit}>
      {data.map((job, i) => (
        <>
          <fieldset className="form__set">
            <FormField
              id={`company-${i + 1}`}
              label="Company"
              defaultValue={job.company}
              type="text"
              required
            />
            <FormField
              id={`title-${i + 1}`}
              label="Title"
              defaultValue={job.title}
              type="text"
              required
            />
            <FormField
              id={`description-${i + 1}`}
              label="Description"
              defaultValue={job.description}
              type="text"
              required
            />
            <FormDatesRange
              id={`practice-${i + 1}`}
              label="Practice"
              defaultStart={job.start}
              defaultEnd={job.end}
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
