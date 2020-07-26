import React, { useState, useEffect, useCallback } from 'react';
import Note from './Note';

const App = () => {


  const initialState = JSON.parse(window.localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(initialState);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const updateTitle = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const updateContent = useCallback((event) => {
    setContent(event.target.value);
  }, []);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setNotes([
      ...notes,
      {
        noteTitle: title,
        noteContent: content,
        createdOn: new Date(),
      }
    ]);
    setTitle('');
    setContent('');
  }, [notes, content, title]);

  const onDelete = index => {
    const tempNotes = [...notes];
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const createNotes = () => {
    return notes.map((note, index) =>
      (
        <Note
          key={note.createdOn}
          index={index}
          title={note.noteTitle}
          content={note.noteContent}
          onDelete={() => onDelete(index)}
        />
      )
    );
  }


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={formSubmitted}>
          <label htmlFor="note-title-input">Title</label>
          <input type="text" id="note-title-input" name="note-title-input" value={title} onChange={updateTitle} /><br />
          <label htmlFor="note-content-input">What's your note?</label><br />
          <textarea name="note-content-input" id="note-content-input" cols="30" rows="10" value={content} onChange={updateContent}></textarea><br />
          <button type="submit">ADD YOUR NOTE</button>
        </form>
      </header>
      {createNotes()}
    </div>
  );
}

export default App;
