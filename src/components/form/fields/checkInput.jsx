import React from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';
import theme from '../../../style/theme';

const Checkbox = styled.div`
    flex-direction: row;
    //display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    margin: ${props => (props.margin ? props.margin : '0 2rem 0.8rem 0')};
    //margin-bottom: 0.8rem;
    font-size: 1rem;
    font-family: ${p => p.theme.main.font};
`;

const PaddedLabel = styled(Label)`
   display: flex;
   align-items: center;
    //padding: 0.25rem 0 0.25rem 2.25rem;
    line-height: 1.5rem;
    position: relative;
    //opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
`;

const CheckboxInput = styled.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 3px;
    display: inline-flex;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;
    background: ${props => props.theme.form.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: ${props => (props.backgroundColor !== null ? props.backgroundColor : props.theme.main.brand)};
        color: ${props => (props.color !== null ? props.color : 'white')};
    }

    &:checked:after {
        content: '\\2714';
        font-family: ${p => p.theme.main.font};
        color: ${props => (props.color !== null ? props.color : props.theme.form.checkbox.checkColour)};
        font-size: 1.1rem;
    }
`;

const CheckboxComponent = ({
    name,
    id,
    label = null,
    required,
    checked,
    value,
    inline = false,
    disabled = false,
    className = null,
    backgroundColor = null,
    color = null,
    margin = null,
    ...rest
}) => (
    <Checkbox inline={inline} className={className} margin={margin}>
        <PaddedLabel htmlFor={id} disabled={disabled}>
            <CheckboxInput
                type="checkbox"
                name={name}
                id={id}
                required={required}
                value={value}
                checked={checked}
                disabled={disabled}
                backgroundColor={backgroundColor}
                color={color}
                {...rest}
            />
            {label}
        </PaddedLabel>
    </Checkbox>
);

export default CheckboxComponent;
