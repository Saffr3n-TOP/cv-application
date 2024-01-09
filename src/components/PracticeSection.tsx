import type { PracticeProps } from '../types';
import Section, { SectionItem, SectionDatesRange } from './Section';

export default function PracticeSection({ setEditMode, data }: PracticeProps) {
  const onEdit = () => {
    setEditMode((prevState) => ({ ...prevState, practice: true }));
  };

  return (
    <Section onEdit={onEdit}>
      {data.map((job) => (
        <>
          <SectionItem label="Company" data={job.company} />
          <SectionItem label="Title" data={job.title} />
          <SectionItem label="Description" data={job.description} />
          <SectionDatesRange label="Practice" start={job.start} end={job.end} />
          <hr />
        </>
      ))}
    </Section>
  );
}
