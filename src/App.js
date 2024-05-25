import React, { useState } from 'react';
import TaskList from './components/TaskList';
import NoteList from './components/NoteList';
import AddTask from './components/AddTask';
import AddNote from './components/AddNote';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  return (
    <div className="App">
      <h1>Organizador de Tarefas e Anotações</h1>
      <AddTask addTask={addTask} />
      <AddNote addNote={addNote} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;