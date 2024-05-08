import React from 'react';

import styled from 'styled-components';

import ToggleArea from '../toggleArea';

const ColumnStyled = styled.div`
    //grid-row: 1;
    grid-column: col-start 1 / span 12;
    display: flex;

    @media (min-width: ${({ collapse = 768 }) => `${collapse}px`}) {
        grid-column: ${props =>
            props.offset ? `col-start ${props.offset} / span ${props.span}` : `span ${props.span}`};
        justify-content: ${props => (props.pull === 'right' ? 'flex-end' : 'flex-start')};
        algin-items: ${props => (props.align === 'top' ? 'flex-start' : 'flex-end')};
    }
`;

export const ColumnWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: ${props => props.theme.layout.gap.lg};
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-auto-flow: row;

    ${ToggleArea} {
        display: contents;
    }
`;

export default function Column({ span = 4, offset = '', pull = 'left', align = 'top', children }) {
    return (
        <ColumnStyled span={span} offset={offset} pull={pull} align={align}>
            {children}
        </ColumnStyled>
    );
}
