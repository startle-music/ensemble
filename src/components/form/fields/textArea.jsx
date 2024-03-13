import React from 'react';

import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
    width: 100%;
    height: 10rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid ${props => props.theme.main.border};
    border-radius: ${props => props.theme.main.borderRadius};
    background: ${props => props.theme.main.background};
    box-sizing: border-box;
    font-size: ${props => props.theme.main.fontSize};
    resize: none;
    font-family: ${props => props.theme.main.font};
`;

export default function TextArea({ name, value, onChange, placeholder }) {
    return <TextAreaStyled name={name} value={value} onChange={onChange} placeholder={placeholder} />;
}
