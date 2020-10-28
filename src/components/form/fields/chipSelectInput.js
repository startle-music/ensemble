import React, { Component } from 'react';
import styled from 'styled-components';
import Chip from '../../chip';
import Label from '../labels';

const Wrap = styled.div`
    display: flex;
`;

const ChipWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    justify-content: center;
`;

const ChipSelectWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const FieldWrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 26rem;
    margin: 0 0.325rem 0 0;

    input {
        //border: 1px solid #ccc;
        border-radius: ${props => props.theme.main.borderRadius};
        font-size: 1rem;
        padding: 0.875rem 0.6rem;
        width: 100%;
    }
`;

class ChipInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            selected: props.chips,
            current: ''
        };
        this.addChip = this.addChip.bind(this);
        this.chipOnClick = this.chipOnClick.bind(this);
        this.chipOnRemove = this.chipOnRemove.bind(this);
    }

    chipOnClick() {
        console.log(this);
        return null;
    }

    chipOnRemove(value) {
        const { selected } = this.state;
        const chipList = selected.filter(chip => chip !== value);
        this.setState({
            selected: chipList
        });
    }

    renderChip(chip, key) {
        const { name, id } = this.props;
        const { onClick = null, onRemove = null, label, value, product = 'default' } = chip;

        let onClickFunction = this.chipOnClick;
        let onRemoveFunction = () => this.chipOnRemove(value);

        if (onClick !== null) {
            onClickFunction = onClick;
        }
        if (onRemove !== null) {
            onRemoveFunction = () => onRemove(value);
        }
        return (
            <Chip
                name={name}
                key={key}
                id={`chip-${id}-${value}`}
                onClick={onClickFunction}
                onRemove={onRemoveFunction}
                checked
                value={value}
                label={label}
                product={product}
            />
        );
    }

    addChip(evnt) {
        evnt.preventDefault();

        if (evnt.target && evnt.target.value !== '') {
            const selectbox = evnt.target;
            const { selected } = this.state;
            const _selected = selected;
            _selected.push(selectbox.value);

            this.setState({
                selected: _selected,
                current: ''
            });
        }
    }

    renderOptions(options) {
        console.log('renderOption,', options, this);
        const { current } = this.state;
        return (
            <div className="styled-select">
                <select name="new_chip" onChange={this.addChip} value={current}>
                    <option value="">Select Another Option</option>
                    {options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        );
    }

    render() {
        const { name, id, label, inline = false } = this.props;
        console.log(this);
        const { selected, options } = this.state;
        const chips = selected.map(chip => {
            const matches = options.filter(option => chip === option.value);
            if (matches.length > 0) {
                return matches[0];
            }
            return null;
        });
        const filteredOptions = options.filter(option => {
            if (selected.indexOf(option.value) === -1) {
                return true;
            }
            return false;
        });
        return (
            <Wrap inline={inline} id={id}>
                <ChipSelectWrap>
                    <InputWrap>
                        <Label htmlFor="new_chip">{label}</Label>
                        <FieldWrap>{this.renderOptions(filteredOptions)}</FieldWrap>
                    </InputWrap>
                    <input name={`chip-values-${name}`} type="hidden" value={selected.join(',')} />
                    <ChipWrap>{chips.map((chip, key) => (chip !== null ? this.renderChip(chip, key) : ''))}</ChipWrap>
                </ChipSelectWrap>
            </Wrap>
        );
    }
}

export default ChipInput;
