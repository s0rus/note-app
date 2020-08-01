import React, { useState, useEffect, useCallback } from 'react';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

const Note = ({ title, content, index, onDelete }) => {

    const noteInfo = {
        noteTitle: title,
        noteContent: content,
    }

    const initialState = JSON.parse(window.localStorage.getItem(`note-${index}`)) || noteInfo;
    const [note, setNote] = useState(initialState);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        window.localStorage.setItem(`note-${index}`, JSON.stringify(note));
        return () => {
            window.localStorage.removeItem(`note-${index}`);
        }
    }, [index, note]);

    const onEdit = useCallback(() => {
        setEdit(!edit);
    }, [edit]);

    const onConfirm = useCallback((event, newTitle, newContent) => {
        event.preventDefault();

        setNote({
            ...note,
            noteTitle: newTitle,
            noteContent: newContent,
        });

        setEdit(!edit);
    }, [edit, note]);

    return (
        <>
            {!edit ? (
                <ViewNote title={note.noteTitle} content={note.noteContent} onDelete={() => onDelete()} onClick={() => onEdit()} />
            ) : <EditNote title={note.noteTitle} content={note.noteContent} onClick={() => onEdit()} onSubmit={(event, newTitle, newContent) => onConfirm(event, newTitle, newContent)} />}
        </>
    )
}

export default Note;