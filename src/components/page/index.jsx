import React from 'react';
import styled, { css } from 'styled-components';

const PageStyled = styled.div`
    background: ${props => props.theme.main.background};
    display: block;
    width: 100vw;
    min-height: 100vh;
    padding: 2rem;
`;

export default function Page({ children }) {
    return <PageStyled>{children}</PageStyled>;
}
