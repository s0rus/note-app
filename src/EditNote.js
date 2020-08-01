import React, { useState, useCallback } from 'react';

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
        <div>
            <form onSubmit={(event) => onSubmit(event, newTitle, newContent)}>
                <label htmlFor="title">title</label>
                <input value={newTitle} name="title" onChange={onNewTitle} /><br />
                <label htmlFor="content">content</label><br />
                <textarea name="content" cols="30" rows="10" value={newContent} onChange={onNewContent}></textarea><br />
                <button type="submit">confirm</button>
            </form>
        </div >
    )
};

export default EditNote;