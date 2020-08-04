import React from 'react';
import { StyledButton, StyledTitle, NoteBar, NoteContent } from '../styles';

const ViewNote = ({ title, content, onDelete, onClick }) => {

    return (
        <>
            <NoteBar>
                <StyledTitle>{title}</StyledTitle>
                <div>
                    <StyledButton onClick={() => onDelete()}><span role="img" aria-label="delete">❌</span></StyledButton>
                    <StyledButton onClick={() => onClick()}><span role="img" aria-label="edit">📝</span></StyledButton>
                </div>
            </NoteBar>
            <NoteContent>
                <p>{content}</p>
            </NoteContent>
        </>
    )
};

export default ViewNote;