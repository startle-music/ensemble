import React from 'react'
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';


const btnBase = css`
    text-decoration: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    display: ${({display}) => (display ? display : `block`)};
    font-family: ${({font}) => font ? font : 'inherit'};
    padding: ${({padding}) => (padding ? padding : `0.6rem 0.9rem`)};
    font-size: ${({fontSize}) => (fontSize ? fontSize : `1rem`)};
    border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '0.5rem')};
    cursor: pointer;
    box-shadow: none;
    
    background: ${({backgroundColour}) => backgroundColour};
    border: 2px solid ${({borderColour}) => borderColour};
    color: ${({buttonColour}) => buttonColour};

    &:disabled, &:disabled:hover, &:disabled:active  {
        opacity: 0.4;
        cursor: default;
        user-select: none;
        pointer-events: none;
    }

    &:hover {
        background: ${props => props.backgroundColourHover};
        border: 2px solid ${props => props.borderColourHover};
        color: ${props => props.buttonColourHover};
    }
    &:active {
        background: ${props => props.activeBackgroundColourHover};
        border: 2px solid ${props => props.borderColourHover};
        color: ${props => props.buttonColourHover};
    }

    /* if a button is followed by a button add left margin to the trailing button */
    &+button, &+a {
        margin-left: 0.4rem;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
`;

const BaseButton = styled.button`
    ${btnBase}
`;

const RouteLinkBase = styled.a`
    ${btnBase}
`;

const InputButtonBase = styled.input`
    ${btnBase}
`;



const RouteLinkButton = props => {
    const { children, to } = props;
    // should href be to and import nextjs route link component?
    return (
        <RouteLinkBase href={to} {...props}>
            {children}
        </RouteLinkBase>
    );
};
const LinkButton = props => {
    const { children, href } = props;
    // should href be to and import nextjs route link component?
    return (
        <RouteLinkBase href={href} {...props}>
            {children}
        </RouteLinkBase>
    );
};

const LoadingWrap = styled.div`
    position: relative;
    user-select: none;

    > *:first-child {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    > *:not(:first-child) {
        opacity: 0;
    }
`;

const Button = props => {
    const { 
        children, 
        loading = false, 
        message = null, 
        font = null, 
        buttonColour = '#fff', 
        backgroundColour = '#faa',
        activeBackgroundColour = '#fcc',
        activeMainColour = '#fff',
        borderColour = '#000',
        buttonColourHover = '#fff', 
        backgroundColourHover = '#faa',
        activeBackgroundColourHover = '#fcc',
        activeMainColourHover = '#fff',
        borderColourHover = '#000',
        outline = false, 
        to = false, 
        href = false 
    } = props;
    let content = children;
    
    const attributes = {
        ...props
    }
    
    // 
    if(to !== false) {
        return <RouteLinkButton {...attributes}>{content}</RouteLinkButton>;
    }

    if(href !== false) {
        return <LinkButton {...attributes}>{content}</LinkButton>;
    }

    
    return <BaseButton {...attributes}>{content}</BaseButton>;
};

export default Button;
