import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../style/theme';

const Text = styled.label`
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: ${theme.mainColors.paintItBlack};
    text-align: left;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Dropdown = styled.select`
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    display: block;
    width: 100%;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    padding: 0.875rem 0.6rem;

    &:focus {
        outline: none;
    }

    option {
        background: ${props => theme.text.input.background};
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: ${props => theme.generalColors.lightBlueGrey};
    }
`;


const StyledSelect = styled.div`
    margin: 0;
    min-width: 10rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: ${props => theme.text.input.background};
    border-radius: 0.45rem;
    box-shadow: none;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        right: 10px;
        top: 37%;
        z-index: 100;
        box-sizing: border-box;
        height: 0.5rem;
        width: 0.5rem;
        border-style: solid;
        border-color: #787e89;
        border-width: 0px 2px 2px 0px;
        transform: rotate(45deg);
        transition: border-width 150ms ease-in-out;
        pointer-events: none;

    }
    @supports (-moz-appearance: none) {
        select {
            -moz-appearance: none;
            text-indent: 0.01px;
            text-overflow: '';
        }
    }
`;

const Label = ({ children }) => children ? <Text>{children}</Text> : null;

const SelectInput = ({ value, name, children, label, onChange = () => {} }) => (
    <Wrapper>
        <Label htmlFor={name}>{label}</Label>
        <StyledSelect>
            <Dropdown value={value} name={name} onChange={onChange}>
                {children}
            </Dropdown>
        </StyledSelect>
    </Wrapper>
);

export default SelectInput;