import React, { useState, useEffect } from 'react';

const ViewNote = ({ title, content, onDelete, onToggle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete()}>delete</button>
            <button onClick={() => onToggle()}>edit</button>
        </div>
    )
};

const EditNote = ({ title, content, onToggle }) => {
    return (
        <div>
            XD
            <button onClick={() => onToggle()}>edit</button>
        </div>
    )
};

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

    const onToggle = () => {
        setEdit(!edit);
    }

    return (
        <>
            {!edit ? (
                <ViewNote title={note.noteTitle} content={note.noteContent} onDelete={() => onDelete()} onClick={() => onToggle()} />
            ) : <EditNote onClick={() => onToggle()} />}
        </>
    )
}

export default Note;