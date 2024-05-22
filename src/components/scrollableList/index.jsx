import React from 'react';

import styled from 'styled-components';

const ScrollableListStyled = styled.ul`
    overflow-y: auto;
    height: 50vh;
    padding: ${props =>
        props.padding
            ? props.padding
            : `${props.theme.layout.padding.vertical.sm} ${props.theme.layout.padding.horizontal.sm}`};
    margin: ${props => (props.margin ? props.margin : `0 0 ${props.theme.layout.padding.vertical.lg}`)};
    border: 1px solid ${props => props.theme.main.border};
    list-style: none;
    background: ${props => (props.background ? props.theme.colors.lightGrey : props.theme.colors.white)};
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

export default function ScrollableList({ padding = null, margin, children, background }) {
    return (
        <ScrollableListStyled padding={padding} margin={margin} background={background}>
            {children}
        </ScrollableListStyled>
    );
}
