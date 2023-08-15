import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import theme from '../../style/theme';
import { darken, lighten } from 'polished';
import Close from '../icons/Times';

const Wrap = styled.div`
    font-family: ${({theme}) => theme.main.font};
    display: inline-flex;
    border-radius: 10.325em;
    margin: 0 0.325em 0 0;
    overflow: hidden;
    background: ${({backgroundColor}) => backgroundColor};
    color: ${({color}) => color};
    align-items: center;

    input,
    input:checked {
        display: none;
    }

    label {
        padding: 0.5em 0.75em;
        color: inherit;
        cursor: pointer;

        &:focus {
            background: rgba(0, 0, 0, 0.175);
        }
    }

    button {
        display: inline-block;
        padding: 1em 0.6em 0.3em 0.5em;
        width: 1.7em;
        box-sizing: border-box;
        background: rgba(40, 40, 40, 0.075);
        cursor: pointer;
        border: 0px;

        svg {
            width: 100%;
            height: 100%;
            color: white;
            fill: white;
        }
    }
`;

const renderClose = (onRemove, data) => {
    console.log('onRemove', onRemove);
    if (onRemove === null) {
        return null;
    }
    const { label, name, value } = data;
    return (
        <button type="button" onClick={onRemove} label={label} name={name} value={value}>
            <Close />
        </button>
    );
};

const defaultOnClick = () => null;
function calculateTextColour(textColor) {
    let color = 'white';

    if(textColor !== null) {
        color = textColor
    }
    return color
}

const Chip = ({ label, value, name = null, color = 'red', textColor = null, onClick = null, onRemove = null }) => {
    let chipName = name;
    if (name === null) {
        chipName = `chip-name-${label}`;
    }

    let onClickFunction = defaultOnClick;
    if (onClick !== null) {
        onClickFunction = onClick;
    }

    const textColour = calculateTextColour(textColor)

    return (
        <Wrap backgroundColor={color} color={textColour}>
            <label
                htmlFor={chipName}
                onClick={onClickFunction}
            >
                <input type="checkbox" name={chipName} value={value} defaultChecked />
                {label}
            </label>
            { renderClose(onRemove, { label, name, value }) }
        </Wrap>
    );
};

export default Chip;
