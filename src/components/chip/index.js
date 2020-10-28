import React, { Component } from 'react';
import styled from 'styled-components';
import Close from '../icons/Times';

const Wrap = styled.div`
    display: inline-flex;
    border-radius: 10.325em;
    margin: 0 0.325em 0 0;
    overflow: hidden;
    background: red;
    color: white;

    input,
    input:checked {
        display: none;
    }

    label {
        padding: 0.5em 0.75em;
        color: white;
        cursor: pointer;

        &:focus {
            background: rgba(0, 0, 0, 0.175);
        }
    }

    button {
        padding: 0.5em 0.6em 0.5em 0.5em;
        width: 1.7em;
        height: 100%;
        box-sizing: border-box;
        background: rgba(40, 40, 40, 0.075);
        cursor: pointer;

        svg {
            width: 100%;
            height: 100%;
            color: white;
            fill: white;
        }
    }
`;

const renderClose = (onRemove, data) => {
    const { label, name, value } = data;
    if (onRemove === null) {
        return null;
    }
    return (
        <button type="button" onClick={onRemove} label={label} name={name} value={value}>
            <Close />
        </button>
    );
};

const defaultOnClick = () => null;

const Chip = ({ label, value, name = null, product = 'default', onClick = null, onRemove = null }) => {
    let chipName = name;
    if (name === null) {
        chipName = `chip-name-${label}`;
    }

    let onClickFunction = defaultOnClick;
    if (onClick !== null) {
        onClickFunction = onClick;
    }

    return (
        <Wrap product={product}>
            <label
                style={{ padding: '0.5em 0.75em', color: '#FFF', width: 'auto', margin: '0' }}
                htmlFor={chipName}
                onClick={onClickFunction}
            >
                <input type="checkbox" name={chipName} value={value} defaultChecked />
                {label}
            </label>
            {renderClose(onRemove, { label, name, value })}
        </Wrap>
    );
};

export default Chip;
