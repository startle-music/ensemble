import react from 'react';

import styled from 'styled-components';

const ScrollableListStyled = styled.ul`
    overflow-y: auto;
    height: 100%;
    padding: 1rem;
    border: 1px solid ${props => props.theme.main.border};
    \list-style: none;
`;

export default function ScrollableList({ children }) {
    return <ScrollableListStyled>{children}</ScrollableListStyled>;
}
