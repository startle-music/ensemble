import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';

const SelectBase = css`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

const Select = styled.div`
    ${SelectBase}
`;

class SelectComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        const { value } = this.props;
        this.state = {
            selectValue: value
        };
    }

    onChange(e) {
        const { selectValue } = this.state;
        if (typeof this.props.onChange === 'function' && this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
        this.setState({
            selectValue: e.target.value
        });
    }

    render() {
        const { name, type, label, required, options } = this.props;
        const { selectValue } = this.state;
        return (
            <Select>
                {label ? (
                    <Label htmlFor={name} block>
                        {label}
                    </Label>
                ) : null}

                <div className="styled-select">
                    <select
                        value={selectValue}
                        name={name}
                        data-type={type}
                        required={required}
                        onChange={e => {
                            this.onChange(e);
                        }}
                    >
                        {options.map(({ value, label }) => (
                            <option value={value}>{label}</option>
                        ))}
                    </select>
                </div>
            </Select>
        );
    }
}

export default SelectComponent;
