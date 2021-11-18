import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';
import theme from '../../../style/theme';

const FieldBase = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    input {
        //border: 1px solid #ccc;
        border-radius: ${props => theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
    }
`;

const Field = styled.div`
    ${FieldBase}
`;

class FieldComponent extends Component {
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
        const {
            name,
            type,
            label,
            required,
            pattern = undefined,
            minlength = 3,
            maxlength = 999,
            placeholder,
            id = null,
            style = null,
            ref = null
        } = this.props;
        const { value } = this.state;
        return (
            <Field style={style}>
                {label ? <Label htmlFor={name}>{label}</Label> : null}

                <input
                    ref={ref}
                    type={type}
                    name={name}
                    required={required}
                    pattern={pattern}
                    minLength={minlength}
                    maxLength={maxlength}
                    onChange={this.onChange}
                    placeholder={placeholder || label}
                    defaultValue={value}
                    id={id}
                />
            </Field>
        );
    }
}

export default FieldComponent;
