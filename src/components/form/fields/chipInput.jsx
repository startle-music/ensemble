import React, { Component } from 'react';
import styled from 'styled-components';
import Chip from '../../chip';
import Label from '../labels';

const Wrap = styled.div`
    display: flex;
`;

const ChipWrap = styled.div`
    display: flex;
`;

const InputWrap = styled.div`
    display: flex;
    padding: 0.75rem 0;
`;

const Form = styled.form`
    display: block;
    width: 100%;
`;

const FieldWrap = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    max-width: 26rem;

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
            current: '',
            chips: props.chips
        };
        this.addChip = this.addChip.bind(this);
        this.chipOnClick = this.chipOnClick.bind(this);
        this.chipOnRemove = this.chipOnRemove.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    chipOnClick() {
        console.log(this);
        return null;
    }

    chipOnRemove(value) {
        const { chips } = this.state;
        const chipList = chips.filter(chip => chip.value !== value);
        this.setState({
            chips: chipList
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
                white
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
        if (evnt.target && evnt.target.new_chip) {
            const { chips: chipList } = this.state;
            let newChip = {
                label: evnt.target.new_chip.value,
                value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
            };
            if (chipList.length >= 1) {
                newChip = {
                    ...chipList[0],
                    label: evnt.target.new_chip.value,
                    value: evnt.target.new_chip.value.toLowerCase().replace(/ _:;,\./g, '-')
                };
            }

            chipList.push(newChip);
            this.setState({
                current: '',
                chips: chipList
            });
        }
    }

    onHandleChange(evnt) {
        this.setState({
            current: evnt.target.value
        });
    }

    render() {
        const { name, id, label, inline = false } = this.props;
        const { chips, current } = this.state;
        const addChipFunction = this.addChip;
        const chipValues = chips.map(function(chip) {
            return chip.value;
        });
        return (
            <Wrap inline={inline} id={id}>
                <Label htmlFor={name}>
                    {label}
                    <InputWrap>
                        <Form onSubmit={addChipFunction}>
                            <FieldWrap>
                                <input type="text" name="new_chip" value={current} onChange={this.onHandleChange} />
                            </FieldWrap>
                        </Form>
                        <input name={`chip-values-${name}`} type="hidden" value={chipValues.join(',')} />
                    </InputWrap>
                    <ChipWrap>{chips.map((chip, key) => this.renderChip(chip, key))}</ChipWrap>
                </Label>
            </Wrap>
        );
    }
}

export default ChipInput;
