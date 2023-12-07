import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const Wrap = styled.div`
    display: flex;
    font-family: MuseoSansReg, sans-serif;
    flex-wrap: ${props => (props.small ? `nowrap` : `wrap`)};
    justify-content: ${props => (props.small ? `space-between` : `center`)};
    background: ${props => props.backgroundColour};
    color: ${props => props.textColour};
    padding: ${props => (props.small ? `1rem` : `1rem`)};
    width: 100%;
    border-radius: ${props => props.theme.main.borderRadius};
    box-shadow: 0px 1px 1px ${transparentize(0.8, '#000')};
    transition: all 0.2s linear;
    user-select: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 2px 5px ${transparentize(0.8, '#000')};
    }

    &:active {
        background: ${props => props.theme.selectionPanel.active.background};
        color: ${props => props.theme.selectionPanel.active.color};
    }

`;

const Content = styled.div`
    display: flex;
    flex-direction: ${({small}) => (small ? `row` : `column`)};
    align-items: center;
    align-self: center;

    svg {
        margin-bottom: ${({small}) => (small ? `0` : `1rem`)};
        margin-right: ${({small}) => (small ? `1rem` : `0`)};
        font-size: 2rem;
    }
`;


const getColours = (colour, active) => {
    
    let textColour = 'black';
    let backgroundColour = 'white';
    
    if(active) {
        textColour = 'white';
        backgroundColour = 'red';
    }
    
    /*if(theme.colors[colour]) {
        textColour = theme.colors[colour];
        backgroundColour = theme.selectionPanel.background;

        if(active) {
            textColour = theme.generalColors.white;
            backgroundColour = theme.colors[colour];
        }
    }*/

    return { textColour, backgroundColour };
}

const SelectionPanel = ({ children, active = false, small = false, colour = 'simplyRed', ...rest }) => {
    
    const attributes = {...rest, ...getColours(colour, active)};
    return (
        <Wrap active={active} small={small} {...attributes}>
            <Content small={small} {...rest}>{children}</Content>
        </Wrap>
    );
};

export default SelectionPanel;
