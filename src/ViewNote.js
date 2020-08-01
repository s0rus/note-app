import React from 'react';

const ViewNote = ({ title, content, onDelete, onClick }) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete()}>delete</button>
            <button onClick={() => onClick()}>edit</button>
        </div>
    )
};

export default ViewNote;