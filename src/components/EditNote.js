import React, { useState, useCallback } from 'react';
import { NoteBar, NoteContent, StyledButton, StyledInput, StyledTextarea } from '../styles';

const EditNote = ({ title, content, onSubmit }) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    const onNewTitle = useCallback((event) => {
        setNewTitle(event.target.value);
    }, []);

    const onNewContent = useCallback((event) => {
        setNewContent(event.target.value);
    }, []);

    return (
        <>
            <form onSubmit={(event) => onSubmit(event, newTitle, newContent)}>
                <NoteBar>
                    <StyledInput edit value={newTitle} name="title" onChange={onNewTitle} />
                    <StyledButton type="submit"><span role="img" aria-label="confirmedit">✔</span></StyledButton>
                </NoteBar>
                <NoteContent>
                    <StyledTextarea name="content" cols="30" rows="10" value={newContent} onChange={onNewContent}></StyledTextarea>
                </NoteContent>
            </form>
        </>
    )
};

export default EditNote;