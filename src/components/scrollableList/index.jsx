import React from 'react';

import styled from 'styled-components';

const ScrollableListStyled = styled.ul`
    overflow-y: auto;
    height: 50vh;
    padding: ${props => (props.padding ? props.padding : props.theme.container.padding.horizontal.lg)};
    margin: ${props => (props.margin ? props.margin : `0 0 ${props.theme.layout.margin}`)};
    border: 1px solid ${props => props.theme.main.border};
    \list-style: none;
`;

export const ListItem = styled.li`
    font-family: ${props => props.theme.main.font};

    &::before {
        content: '';
        width: 100%;
        height: 1px;
        display: ${props => (props.border ? 'block' : 'none')};
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

export default function ScrollableList({ padding = null, children }) {
    return (
        <ScrollableListStyled padding={padding} margin={margin}>
            {children}
        </ScrollableListStyled>
    );
}
