import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #264653;
        font-size: 16px;
        color: #F1F6F9;
    }
`;

export const StyledHeader = styled.header`
    background-color: #F4A261;
    color: #F1F6F9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 2.5rem;
`;

export const StyledForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
`;

export const StyledInputWrapper = styled.div`
    background-color: #F1F6F9;
    color: #F4A261;
    width: 20rem;
    border: 2px solid #F4A261;
    border-radius: 0.5rem;
    padding: 1rem;
    min-height: 2.5rem;
    font-weight: 900;
    font-size: 1.2rem;
    margin: 0.5rem;
`;



export const StyledLabel = styled.label`
    text-transform: uppercase;
`;

export const StyledInput = styled.input`
    border: none;
    width: ${props => props.edit ? '50%' : '100%'};
    background-color: #F1F6F9;
    border-bottom: 1px solid #F4A261;
    box-sizing: border-box;
    padding: ${props => props.edit ? '0rem 1rem' : '0.2rem'};

    &:focus{
        outline: none;
    }
`;

export const StyledTextarea = styled.textarea`
    border: none;
    width: 100%;
    background-color: #F1F6F9;
    resize: none;
    border: 1px solid #F4A261;
    border-radius: 2px;
    margin-top: 0.2rem;
    padding: 0.2rem;
    height: 4rem;
    box-sizing: border-box;

    &:focus{
        outline: none;
    }
`;

export const StyledButton = styled.button`
    border: ${props => props.primary ? '2px solid #16ee44' : '2px solid #F4A261'};
    background-color: ${props => props.primary ? 'unset' : '#F1F6F9'};
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    margin: 0.1rem;
    border-radius: 5px;
    color: #16ee44;
    font-size: 1.1rem;
    transition-duration: 0.4s;
    cursor: pointer;
    min-width: 5rem;

    &:focus{
        outline: none;
    }

    &:hover{
        background-color: ${props => props.primary ? '#16ee44' : '#E76F51'};
        
        color: #035d5d;
    }
`;

export const StyledNote = styled.div`
    margin: 1rem auto;
    max-width: 75%;
`;

export const StyledTitle = styled.h1`
    padding: 0.2rem;
`;

export const NoteContent = styled.div`
    max-width: 100%;
    background-color: red;
    word-break:break-all;
    padding: 2rem;
    background-color: #F1F6F9;
    color: #F4A261;
    border-radius: 0px 0px 5px 5px;
`;

export const NoteBar = styled.div`
    background-color: #F4A261;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    border-radius: 5px 5px 0px 0px;
    word-break:break-all;
`;
