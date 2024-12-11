import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import theme from '../../style/theme';
import Close from '../icons/Times';

const Wrap = styled.div`
    display: inline-flex;
    border-radius: 10.325em;
    margin-bottom: ${p => p.theme.layout.padding.vertical.sm};
    overflow: hidden;
    background: ${({ backgroundColor }) => `${backgroundColor}`};
    //border: 1px solid ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color || 'white'};
    align-items: center;
    padding: ${p => p.theme.layout.padding.vertical.xs} ${p => p.theme.layout.padding.horizontal.sm};
    font-family: ${p => p.theme.main.font};

    & + & {
        margin-left: ${p => p.theme.layout.padding.horizontal.xs};
    }
`;

const StyledChip = styled.div`
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
`;

const StyledChipGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
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
    // check if hex value is light or dark and use a contrasting colour
    if (textColor === null) {
        return '#ffffff';
    }

    const hex = textColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 155 ? '#000000' : '#ffffff';
}

export default function Chip({
    label,
    value,
    name = null,
    color = 'red',
    textColor = null,
    onClick = null,
    onRemove = null
}) {
    let chipName = name;
    if (name === null) {
        chipName = `chip-name-${label}`;
    }

    let onClickFunction = defaultOnClick;
    if (onClick !== null) {
        onClickFunction = onClick;
    }

    const textColour = calculateTextColour(textColor);

    return (
        <StyledChip>
            <ChipWrap color={color}>
                <label htmlFor={chipName} onClick={onClickFunction}>
                    <input type="checkbox" name={chipName} value={value} defaultChecked />
                    {label}
                </label>
                {renderClose(onRemove, { label, name, value })}
            </ChipWrap>
        </StyledChip>
    );
}

export function ChipWrap({ children, color = '#FF0000' }) {
    const computedTextColur = calculateTextColour(color);
    return (
        <Wrap backgroundColor={color} color={computedTextColur}>
            {children}
        </Wrap>
    );
}

export function ChipGroup({ children }) {
    return <StyledChipGroup>{children}</StyledChipGroup>;
}
