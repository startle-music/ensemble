import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

const labelBase = css`
    //margin-bottom:5px;
    //font-size: 0.9rem;
    color: ${p => theme.main.color};
`;

const Label = styled.label`
    ${labelBase}
    margin-bottom: ${props => props.margin || 0};
    display: ${({ block }) => (block ? 'block' : 'inline-block')};
    width: 100%;
`;

export default Label;
