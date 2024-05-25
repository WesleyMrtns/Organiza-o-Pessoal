import React from 'react';

const NoteItem = ({ note, updateNote, deleteNote }) => {
  return (
    <div>
      <p>{note.text}</p>
      <button onClick={() => deleteNote(note.id)}>Excluir</button>
    </div>
  );
};

export default NoteItem;