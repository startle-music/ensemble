import React from 'react';
import styled, { css } from 'styled-components';
import { TableElementBase } from '..';

const TdStyled = styled.td`
    ${TableElementBase}
    text-align: ${props => (props.align ? props.align : null)};
`;

const Td = ({ children, align, className }) => (
    <TdStyled className={className} align={align}>
        {children}
    </TdStyled>
);

export default Td;
