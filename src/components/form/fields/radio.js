import React from 'react';
import styled from 'styled-components';
import Label from '../labels';

const Radio = styled.div`
    flex-direction: row;
    display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    margin-right: ${props => (props.inline ? '0.8rem' : 0)};
    margin-bottom: 0.8rem;
    align-items: center;
    font-family: MuseoSansReg, sans-serif;
`;

const PaddedLabel = styled(Label)`
    padding: 0;
    line-height: 1.5rem;
    display: inline-flex;
    align-items: center;
    opacity: ${({disabled}) => disabled ? '0.4' : '1'};
`;

const RadioInput = styled.input`
    position: absolute;
    -webkit-appearance: none;
    padding: 0;
    border-radius: 10rem;
    display: inline-flex;
    position: relative;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin: 0;
    margin-right: 5px;
    background: ${(props) => props.theme.text.input.background};

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &:checked {
        background-color: #ffffff;
        color: #ffffff;
        box-shadow: inset 0 0 0 0.4rem #e83948;
    }
`;

const RadioComponent = ({
    name,
    label,
    required,
    checked,
    inline = false,
    disabled = false,
    value,
    margin = 0,
    className = '',
    defaultChecked = false,
    id = false,
    ...rest
}) => {
    return(
        <Radio inline={inline} className={className}>
            <PaddedLabel margin htmlFor={id} 
                    disabled={disabled}>
                <RadioInput
                    type="radio"
                    checked={checked}                    
                    disabled={disabled}
                    value={value}
                    name={name}
                    id={id || name}
                    required={required}
                    defaultChecked={checked}
                    {...rest}
                />
                {label}
            </PaddedLabel>
        </Radio>
    );
}

export default RadioComponent;
