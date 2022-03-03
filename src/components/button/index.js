import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../style/theme';
import { darken, lighten } from 'polished';


const btnBase = css`
    font-family: ${theme.main.font};
    padding: ${({small}) => (small === true ? `0.6rem 0.9rem` : `0.7rem 1rem`)};
    font-size: ${({small}) => (small === true ? `0.785rem` : `1rem`)};
    text-decoration: none;
    position: relative;
    display: ${({block}) => (block === true ? `block` : `inline-block`)};
    text-align: center;
    box-sizing: border-box;
    font-weight: 600;
    border-radius: ${({rounded}) => (rounded === true ? '2rem' : '0.5rem')};
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
        background: ${props => lighten(0.15, props.backgroundColour)};
        border: 2px solid ${props => lighten(0.15, props.borderColour)};
        color: ${props => lighten(0.15, props.buttonColour)};
    }
    &:active {
        background: ${props => darken(0.05, props.activeBackgroundColour)};
        border: 2px solid ${props => darken(0.05, props.borderColour)};
        color: ${props => darken(0.05, props.buttonColour)};
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

const calculateColours = (colour, outline) => {

    const { mainColors, generalColors} = theme;
    let mainColour = mainColors.simplyRed;
    let activeMainColour = mainColors.simplyRed;
    let altColour = generalColors.white;

    // check main colours for this colour name
    if(mainColors[colour]) {
        mainColour = mainColors[colour];
        activeMainColour = mainColors[colour];
    }

    if(colour === 'transparent' || colour.startsWith('#') || colour.startsWith('rgb')) {
        mainColour = colour;
        activeMainColour = colour;
        if(colour === 'transparent') {
            activeMainColour = generalColors.white;
        }
    }

    switch(mainColour) {
        case 'transparent':
            altColour = mainColors.simplyRed;
            break;

        case mainColors.fadeToGrey:
        case mainColors.mrBlueSky:
            altColour = generalColors.white;
            break;

        case 'default':
            mainColour = mainColors.simplyRed;
            altColour = generalColors.white;
            break;
    }

    const colourObject = {
        buttonColour: altColour,
        backgroundColour: mainColour,
        activeBackgroundColour: activeMainColour,
        borderColour: mainColour
    };

    if(outline === true) {
        colourObject.buttonColour = mainColour
        colourObject.backgroundColour = altColour
        colourObject.activeBackgroundColour = altColour
        colourObject.borderColour = mainColour
    }

    console.log('colourObject', colourObject);
    return colourObject;
}

const Button = props => {
    const { children, loading = false, message = null, colour = 'default', outline = false, to = false, href = false } = props;
    let content = children;
    
    const attributes = {
        ...props,
        ...calculateColours(colour, outline)
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
