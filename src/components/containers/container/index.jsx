import { margin } from 'polished';
import React from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.section`
    display: block;
    background: ${props => props.theme.main.contrastColor};
    border-radius: ${props => props.theme.layout.borderRadius.sm};
    padding: ${props =>
        props.padded
            ? `${props.theme.container.padding.vertical.sm} ${props.theme.container.padding.horizontal.sm}`
            : 0};
    max-width: ${props => (props.wide ? '100%' : props.theme.container.maxWidth.sm)};
    margin: ${props => (props.margin ? props.theme.container.margin.sm : 0)};
    container-type: inline-size;

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        border-radius: ${props => props.theme.layout.borderRadius.lg};
        padding: ${props =>
            props.padded
                ? `${props.theme.container.padding.vertical.lg} ${props.theme.container.padding.horizontal.lg}`
                : 0};
        max-width: ${props => (props.wide ? '100%' : props.theme.container.maxWidth.lg)};
        margin: ${props => (props.margin ? props.theme.container.margin.lg : 0)};
    }
`;

export const ContainerContent = styled.div`
    max-width: ${props => (props.narrow ? props.theme.container.maxWidth.sm : '100%')};
    padding: ${props =>
        props.padded
            ? `${props.theme.container.padding.vertical.sm} ${props.theme.container.padding.horizontal.sm}`
            : 0};
    margin: 0 auto;

    & + & {
        padding-top: 0;
    }

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        max-width: ${props => (props.narrow ? props.theme.container.maxWidth.md : '100%')};
        padding: ${props =>
            props.padded
                ? `${props.theme.container.padding.vertical.lg} ${props.theme.container.padding.horizontal.lg}`
                : 0};
    }
`;

export default function Container({ padded, margin = true, children, wide }) {
    return (
        <ContainerStyled padded={padded} wide={wide} margin={margin}>
            {children}
        </ContainerStyled>
    );
}
