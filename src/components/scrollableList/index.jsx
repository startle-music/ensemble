import react from 'react';

import styled from 'styled-components';

const ScrollableListStyled = styled.ul`
    overflow-y: auto;
    height: 50vh;
    padding: 0;
    margin: 0;
    margin-bottom: ${props => props.theme.layout.margin};
    border: 1px solid ${props => props.theme.main.border};
    \list-style: none;
`;

export const ListItem = styled.li`
    font-family: ${props => props.theme.main.font};

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        border-bottom: 1px solid ${props => props.theme.main.border};
        //margin-right: 0;
        //margin-left: auto;
    }
    &:first-child {
        &::before {
            display: none;
        }
    }
`;

export default function ScrollableList({ children }) {
    return <ScrollableListStyled>{children}</ScrollableListStyled>;
}
