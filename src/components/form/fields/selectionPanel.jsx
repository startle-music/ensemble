import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const Wrap = styled.div`
    display: flex;
    font-family: ${theme.main.font};
    flex-wrap: ${props => (props.small ? `nowrap` : `wrap`)};
    justify-content: ${props => (props.small ? `space-between` : `center`)};
    background-color: ${(props) => props.backgroundColor !== null ? 
            props.backgroundColor : props.active === false ? 
                props.theme.form.input.background : props.theme.form.input.color};
        color: ${(props) => props.color !== null ? 
            props.color : props.active === false ? 
                props.theme.form.input.color : props.theme.form.input.background};
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
        background-color: ${(props) => props.backgroundColor !== null ? 
            props.backgroundColor : props.active ? 
                props.theme.form.input.background : props.theme.form.input.color};
        color: ${(props) => props.color !== null ? 
            props.color : props.active ? 
                props.theme.form.input.color : props.theme.form.input.background};
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


const SelectionPanel = ({ children, backgroundColor= null, color = null, active = false, small = false, ...rest }) => {
    

    const attributes = {
        ...rest,
        backgroundColor: backgroundColor,
        color: color
    };
    
    if(active) {
        attributes.backgroundColor = color;
        attributes.color = backgroundColor;   
    }

    console.log('attributes', attributes);
    return (
        <Wrap active={active} small={small} {...attributes}>
            <Content small={small} {...rest}>{children}</Content>
        </Wrap>
    );
};

export default SelectionPanel;
