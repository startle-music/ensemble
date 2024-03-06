import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: block;
    background: ${props => props.theme.main.contrastColor};
    border-radius: ${props => props.theme.layout.borderRadius.lg};
    padding: ${props =>
        props.padded
            ? `${props.theme.container.padding.vertical.lg} ${props.theme.container.padding.horizontal.lg}`
            : 0};
    max-width: ${props => props.theme.container.maxWidth.lg};
    margin: ${props => props.theme.container.margin.lg};
`;

export default function Container({ padded, children }) {
    return <ContainerStyled padded={padded}>{children}</ContainerStyled>;
}
