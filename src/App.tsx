import type { EditMode, Data } from './types';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import EducationForm from './components/EducationForm';
import './styles/app.sass';

export default function App() {
  const [editMode, setEditMode] = useState<EditMode>({
    contact: true,
    education: true
  });

  const [data, setData] = useState<Data>({
    contact: {
      name: '',
      email: '',
      phone: ''
    },
    education: {
      school: '',
      degree: '',
      start: '',
      end: ''
    }
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
      ) : null}
    </>
  );
}
