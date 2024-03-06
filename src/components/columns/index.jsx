import React from 'react';

import styled from 'styled-components';

const ColumnStyled = styled.div`
    grid-column: ${props => (props.offset ? `col-start ${props.offset} / span ${props.span}` : `span ${props.span}`)};
    //grid-row: 1;
    display: flex;
    justify-content: ${props => (props.pull === 'right' ? 'flex-end' : 'flex-start')};
`;

export const ColumnWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
    gap: ${props => props.theme.layout.gap.lg};
    grid-auto-flow: row;
`;

export default function Column({ span = 4, offset = '', pull = 'left', children }) {
    return (
        <ColumnStyled span={span} offset={offset} pull={pull}>
            {children}
        </ColumnStyled>
    );
}
