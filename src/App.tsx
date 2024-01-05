import type { EditMode, Data } from './types';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import './styles/app.sass';

export default function App() {
  const [editMode, setEditMode] = useState<EditMode>({
    contact: true
  });

  const [data, setData] = useState<Data>({
    contact: {
      name: '',
      email: '',
      phone: ''
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
    </>
  );
}
