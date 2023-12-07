import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';

const FieldBase = css`
    display: none;

    input {
        border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.5rem;
    }
`;

const Field = styled.div`
    ${FieldBase}
`;

class FieldComponent extends PureComponent {
    constructor(props) {
        super(props);
        const { value } = props;

        this.state = {
            value
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { onChange } = this.props;
        if (typeof onChange === 'function' && onChange !== undefined) {
            onChange(e);
        }
    }

    render() {
        const { name, label, required, pattern = undefined, minlength = 3, maxlength = 999, placeholder } = this.props;
        const { value } = this.state;
        return (
            <Field>
                <Label htmlFor={name}>{label}</Label>
                <input
                    type="hidden"
                    name={name}
                    required={required}
                    pattern={pattern}
                    minLength={minlength}
                    maxLength={maxlength}
                    onChange={this.onChange}
                    placeholder={placeholder || label}
                    defaultValue={value}
                />
            </Field>
        );
    }
}

export default FieldComponent;
