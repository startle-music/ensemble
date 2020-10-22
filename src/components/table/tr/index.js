import React from 'react';
import styled, { css } from 'styled-components';
import { TrBase } from '..';

const TrStyled = styled.tr`
    ${TrBase}
`;

const Tr = ({ children, background = null, opacity = 1, stickyActions = true, className = null, ...rest }) => (
    <TrStyled className={className} background={background} opacity={opacity} stickyActions={stickyActions} {...rest}>
        {children}
    </TrStyled>
);

export default Tr;
