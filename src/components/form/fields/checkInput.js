import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';

const CheckboxBase = css`
    flex-direction: row;
    display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    margin-bottom: 15px;
`;

const Checkbox = styled.div`
    ${CheckboxBase}
`;

const PaddedLabel = styled(Label)`
    padding-left: 30px;
    padding-top: 0.25em;
    position: relative;
`;

const CheckboxInput = styled.input`
    -webkit-appearance: none;
    padding: 0;
    border-radius: 3px;
    display: inline-flex;
    position: absolute;
    left: 0;
    top: 0;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
    margin-right: 5px;

    &:active,
    &:checked:active {
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        box-shadow: none;
    }

    &:checked {
        background-color: #e83948;
        color: #ffffff;
    }

    &:checked:after {
        content: '\\2714';
        font-family: 'MuseoSansReg', sans-serif;
        color: #ffffff;
    }
`;

class CheckboxComponent extends PureComponent {
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
            id,
            label,
            required,
            checked,
            value,
            inline = false,
            disabled = false,
            className = null
        } = this.props;
        return (
            <Checkbox inline={inline} className={className}>
                <PaddedLabel htmlFor={id}>
                    <CheckboxInput
                        type="checkbox"
                        name={name}
                        id={id}
                        required={required}
                        value={value}
                        onChange={this.onChange}
                        checked={checked}
                        disabled={disabled}
                    />
                    {label}
                </PaddedLabel>
            </Checkbox>
        );
    }
}

export default CheckboxComponent;
