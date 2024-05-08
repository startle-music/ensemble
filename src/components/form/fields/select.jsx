import React from 'react';
import styled, { css } from 'styled-components';
import Label from './label';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    padding: ${props => (props.inline ? '0.875rem 1.6rem 0.875rem 0.6rem' : '0.875rem 0.6rem')};
    font-family: ${props => props.theme.main.font};
    font-weight: 400;

    &:focus {
        outline: none;
    }

    option {
        background: 'white';
        padding: 0.875rem 0.6rem;
        font-family: MuseoSans, sans-serif;
        color: ${props => props.theme.form.label.color};
    }
`;

const StyledSelect = styled.div`
    margin: 0;
    min-width: ${props => (props.inline ? '4rem' : '10rem')};
    display: inline-block;
    vertical-align: middle;
    position: relative;
    background: ${props => props.theme.form.select.background};
    border: 1px solid ${props => props.theme.form.select.border};
    border-radius: 0.45rem;
    box-shadow: none;
    font-family: ${props => props.theme.main.font};

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
            font-family: ${props => props.theme.main.font};
        }
    }
`;

// const Label = ({ children }) => (children ? <Label>{children}</Label> : null);

const SelectInput = ({ value, name, children, label, inline = false, onChange = () => {} }) => (
    <Wrapper>
        {label ? <Label htmlFor={name}>{label}</Label> : null}
        <StyledSelect inline={inline}>
            <Dropdown value={value} name={name} onChange={onChange} inline>
                {children}
            </Dropdown>
        </StyledSelect>
    </Wrapper>
);

export default SelectInput;
