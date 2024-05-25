import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, updateNote, deleteNote }) => {
  return (
    <div>
      <h2>Lista de Anotações</h2>
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;