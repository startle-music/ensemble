import react from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`
    background: ${props => props.theme.main.contrastColor};
    border-radius: ${props => props.theme.layout.borderRadius.lg};
    padding: ${props => props.theme.container.padding.vertical.lg}
        ${props => props.theme.container.padding.horizontal.lg};
    max-width: ${props => props.theme.container.maxWidth.lg};
    margin: ${props => props.theme.container.margin.lg};
`;

export default function Container({ children }) {
    return <ContainerStyled>{children}</ContainerStyled>;
}
