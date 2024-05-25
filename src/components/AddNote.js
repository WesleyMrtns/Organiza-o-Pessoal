import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote({ id: Date.now(), text: noteText });
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Adicionar nova anotação"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddNote;