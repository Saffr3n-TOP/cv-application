import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import './styles/app.sass';

export default function App() {
  const [editMode, setEditMode] = useState({
    contact: true
  });

  return (
    <>
      {editMode.contact ? (
        <ContactForm setEditMode={setEditMode} />
      ) : (
        <ContactSection setEditMode={setEditMode} />
      )}
    </>
  );
}
