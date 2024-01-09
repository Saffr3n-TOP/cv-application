import type { EducationProps } from '../types';
import Section, { SectionItem, SectionDatesRange } from './Section';

export default function EducationSection({
  setEditMode,
  data
}: EducationProps) {
  const onEdit = () => {
    setEditMode((prevState) => ({ ...prevState, education: true }));
  };

  return (
    <Section onEdit={onEdit}>
      {data.map((school) => (
        <>
          <SectionItem label="School" data={school.school} />
          <SectionItem label="Degree" data={school.degree} />
          <SectionDatesRange
            label="Education"
            start={school.start}
            end={school.end}
          />
          
          <hr />
        </>
      ))}
    </Section>
  );
}
