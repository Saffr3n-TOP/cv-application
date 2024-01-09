import type { EditMode, Data } from './types';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import EducationForm from './components/EducationForm';
import EducationSection from './components/EducationSection';
import PracticeForm from './components/PracticeForm';
import './styles/app.sass';

export default function App() {
  const [editMode, setEditMode] = useState<EditMode>({
    contact: true,
    education: true,
    practice: true
  });

  const [data, setData] = useState<Data>({
    contact: {
      name: '',
      email: '',
      phone: ''
    },
    education: [
      {
        school: '',
        degree: '',
        start: '',
        end: ''
      }
    ],
    practice: [
      {
        company: '',
        title: '',
        description: '',
        start: '',
        end: ''
      }
    ]
  });

  return (
    <>
      {editMode.contact ? (
        <ContactForm
          setEditMode={setEditMode}
          data={data.contact}
          setData={setData}
        />
      ) : (
        <ContactSection setEditMode={setEditMode} data={data.contact} />
      )}

      {editMode.education ? (
        <EducationForm
          setEditMode={setEditMode}
          data={data.education}
          setData={setData}
        />
      ) : (
        <EducationSection setEditMode={setEditMode} data={data.education} />
      )}

      {editMode.practice ? (
        <PracticeForm
          setEditMode={setEditMode}
          data={data.practice}
          setData={setData}
        />
      ) : null}
    </>
  );
}
