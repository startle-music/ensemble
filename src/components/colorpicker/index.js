import React, { Component } from 'react';
import styled from 'styled-components';
//import { ChromePicker } from 'react-color';
import Close from '../icons/Times';
import Button from '../button';

const Remove = styled.div`
    margin-bottom: 1em;
`;

const ColorPicker = ({ value, isOpen, handleChangeOverlayColor, id, toggleColorPicker, removeOverlayColor }) => {
    console.log(value);
    return (
        <div className="color-picker">
            <Button
                title="Show Color Picker"
                style={{
                    background: '#eef0f4',
                    border: '1px solid #eef0f4',
                    padding: '.5em',
                    display: 'flex',
                    alignItems: 'center'
                }}
                type="button"
                onClick={() => {
                    toggleColorPicker(isOpen);
                }}
            >
                <span
                    className="color-toggle"
                    style={{
                        backgroundColor: value !== null && value !== '' && value !== 'undefined' ? `#${value}` : '#FFF'
                    }}
                />
                <span
                    style={{
                        marginLeft: '.5em',
                        color: value !== null && value !== '' && value !== 'undefined' ? `#${value}` : '#787e89',
                        fontWeight: 'normal'
                    }}
                >
                    {value !== null && value !== '' && value !== 'undefined' ? `#${value}` : 'none'}
                </span>
                <span className="sr-only">Pick Color</span>
            </Button>
            {isOpen ? (
                <div
                    className="picker"
                    style={{
                        backgroundColor: '#FFF',
                        padding: '3px',
                        borderRadius: '3px',
                        zIndex: '1',
                        boxShadow: 'inset 0 0 5px 0px #b7c9db'
                    }}
                >
                    <ChromePicker
                        disableAlpha
                        color={value !== null ? value : '#FFF'}
                        onChangeComplete={(c, e) => {
                            handleChangeOverlayColor(c, e);
                        }}
                    />
                    {value !== null && value !== '' && value !== 'undefined' ? (
                        <Remove>
                            <Button
                                product="positive"
                                type="button"
                                onClick={() => {
                                    toggleColorPicker(isOpen);
                                }}
                            >
                                Save
                            </Button>
                            <Button
                                product="negative"
                                type="button"
                                onClick={() => {
                                    removeOverlayColor();
                                }}
                            >
                                Clear
                            </Button>
                        </Remove>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default ColorPicker;
