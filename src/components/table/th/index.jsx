import React from 'react';
import styled, { css } from 'styled-components';
import { TableElementBase } from '..';

const ThStyled = styled.th`
    ${TableElementBase}
    padding: 15px 15px;
`;

const Th = ({ children, className }) => <ThStyled className={className}>{children}</ThStyled>;

export default Th;
