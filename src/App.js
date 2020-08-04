import React, { useState, useEffect, useCallback } from 'react';
import Note from './components/Note';
import Header from './components/Header';
import { StyledButton, GlobalStyle, StyledForm, StyledLabel, StyledInputWrapper, StyledInput, StyledTextarea, StyledNote } from './styles';

const App = () => {

  const initialState = JSON.parse(window.localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(initialState);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const updateTitle = useCallback((event) => {
    if (event.target.value.length >= 20) return;
    setTitle(event.target.value);
  }, []);

  const updateContent = useCallback((event) => {
    if (event.target.value.length >= 100) return;
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
        <StyledNote key={note.createdOn}>
          <Note
            index={index}
            title={note.noteTitle}
            content={note.noteContent}
            onDelete={() => onDelete(index)}
          />
        </StyledNote>
      )
    );
  }


  return (
    <>
      <GlobalStyle />
      <Header />
      <section>
        <StyledForm onSubmit={formSubmitted}>
          <StyledInputWrapper>
            <StyledLabel htmlFor="note-title-input">Title</StyledLabel><br />
            <StyledInput placeholder="20 characters max." type="text" id="note-title-input" name="note-title-input" value={title} onChange={updateTitle} />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="note-content-input">What's your note?</StyledLabel>
            <StyledTextarea placeholder="100 characters max." name="note-content-input" id="note-content-input" value={content} onChange={updateContent}></StyledTextarea>
          </StyledInputWrapper>
          <StyledButton primary type="submit">Create</StyledButton>
        </StyledForm>
      </section>
      {createNotes()}
    </>
  );
}

export default App;
