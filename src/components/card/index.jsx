import React from 'react';

import styled from 'styled-components';

const CardStyled = styled.div`
    padding: 1rem;
    margin: ${props => props.margin || '0 0 1em'};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
    width: 100%;
    align-items: center;
    border-radius: ${props => props.theme.main.borderRadius};
    border: ${props => (props.border ? `1px solid ${props.theme.main.border}` : 'none')};
    background: ${props => props.theme.generalColors.white};
    color: ${props => props.theme.main.color};
`;

export const CardHeader = styled.div`
    padding: 0 1rem;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.main.border}` : 'none')};
`;

export const CardBody = styled.div`
    padding: 0 1rem;
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.main.border}` : 'none')};
    text-align: ${props => props.align || 'left'};
`;

export const CardFooter = styled.div`
    padding: ${props => (props.padding ? props.padding : `0 1rem`)};
    border-bottom: ${props => (props.border ? `1px solid ${props.theme.main.border}` : 'none')};
    margin-left: auto;
`;

export default function Card({ horizontal, margin, border = true, children }) {
    return (
        <CardStyled horizontal={horizontal} margin={margin} border={border}>
            {children}
        </CardStyled>
    );
}
