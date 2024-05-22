import React from 'react';

import styled from 'styled-components';

import ToggleArea from '../toggleArea';

const ColumnStyled = styled.div`
    //grid-row: 1;
    grid-column: col-start 1 / span 12;
    display: flex;
    margin-bottom: ${props => props.theme.layout.padding.vertical.sm};

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.sm}) {
        margin-bottom: 0;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        grid-column: ${props =>
            props.offset ? `col-start ${props.offset} / span ${props.span}` : `span ${props.span}`};
        justify-content: ${props => (props.pull === 'right' ? 'flex-end' : 'flex-start')};
        align-items: ${props => (props.align === 'top' ? 'flex-start' : 'flex-end')};
    }
`;

export const ColumnWrapper = styled.div`
    width: 100%;
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-auto-flow: row;
    margin: ${p => (p.margin ? p.margin : '0')};

    @media (min-width: ${p => p.theme.layout.breakpoints.sm}) {
        display: grid;
        gap: ${props => props.theme.layout.gap.sm};
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        gap: ${props => props.theme.layout.gap.lg};
    }

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
