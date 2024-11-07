import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';

const StyledHr = styled.hr`
    width: ${({ width }) => width};
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.layout.padding.vertical.sm};
    border: 0;
    border-bottom: 1px solid ${({ color }) => (color !== null ? color : theme.main.border)};
`;

const Hr = ({ width = '100%', color = null }) => <StyledHr width={width} color={color} />;

export default Hr;
