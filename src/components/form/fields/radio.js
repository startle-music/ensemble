import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';

const RadioBase = css`
    flex-direction: row;
    display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    margin-right: ${props => (props.inline ? '15px' : 0)};
    margin-bottom: 15px;
    align-items: center;
`;

const Radio = styled.div`
    ${RadioBase}
`;

const RadioInput = styled.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 10rem;
    display: inline-flex;
    position: relative;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;
    vertical-align: middle;

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

class RadioComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (typeof this.props.onChange === 'function' && this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }

    render() {
        const {
            name,
            label,
            required,
            checked,
            inline = false,
            value,
            margin = 0,
            className = '',
            defaultChecked = false,
            id = false
        } = this.props;
        return (
            <Radio inline={inline} className={className}>
                <Label margin htmlFor={id}>
                    <RadioInput
                        type="radio"
                        checked={checked}
                        value={value}
                        name={name}
                        id={id || name}
                        required={required}
                        onChange={e => this.onChange(e)}
                        defaultChecked={defaultChecked}
                    />
                    {label}
                </Label>
            </Radio>
        );
    }
}

export default RadioComponent;
