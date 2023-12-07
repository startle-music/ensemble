import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import Label from '../labels';
import ColorPicker from '../../colorpicker';

const Wrap = styled.div`
    display: flex;
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

class ColorPickerInput extends Component {
    constructor(props) {
        super(props);
        const { value, name, label, options } = this.props;
        this.state = {
            isOpen: false,
            color: value,
            shouldUpdate: false,
            shouldRender: false
        };
        this.handleChangeOverlayColor = this.handleChangeOverlayColor.bind(this);
        this.toggleColorPicker = this.toggleColorPicker.bind(this);
        this.removeOverlayColor = this.removeOverlayColor.bind(this);
        this.checkShouldRender = this.checkShouldRender.bind(this);
    }

    handleChangeOverlayColor(c = '', e = '') {
        const { isOpen, color, shouldRender } = this.state;
        this.setState(
            {
                color: c.hex.replace('#', ''),
                isOpen,
                shouldUpdate: true,
                shouldRender
            },
            () => {
                const objDiv = document.getElementsByClassName('ReactModal__Content');
                if (objDiv.length === 1 && (color === '' || color === 'undefined' || color === 'null')) {
                    objDiv[0].scrollTop = objDiv[0].scrollHeight;
                }
            }
        );
    }

    removeOverlayColor() {
        const { shouldUpdate, shouldRender } = this.state;
        this.setState({
            color: '',
            isOpen: false,
            shouldUpdate,
            shouldRender
        });
    }

    toggleColorPicker(isOpen) {
        const { color, shouldUpdate, shouldRender } = this.state;
        this.setState(
            {
                color,
                isOpen: !isOpen,
                shouldUpdate,
                shouldRender
            },
            () => {
                const objDiv = document.getElementsByClassName('ReactModal__Content');
                if (objDiv.length === 1) {
                    objDiv[0].scrollTop = objDiv[0].scrollHeight;
                }
            }
        );
    }

    checkShouldRender() {
        const e = document.getElementsByName('overlay');
        const strUser = e[0].options[e[0].selectedIndex].value;
        const { color, isOpen, shouldUpdate } = this.state;
        if (strUser !== '') {
            this.setState({
                color,
                isOpen,
                shouldUpdate,
                shouldRender: true
            });
        } else {
            this.setState({
                color,
                isOpen,
                shouldUpdate,
                shouldRender: false
            });
        }
    }

    componentDidMount() {
        this.checkShouldRender();
        const e = document.getElementsByName('overlay');
        e[0].addEventListener('change', this.checkShouldRender);
    }

    render() {
        const { name, label, options } = this.props;
        const { isOpen, color, shouldUpdate, shouldRender } = this.state;
        console.log(color);
        const defaultColor = color === 'null' || color === 'undefined' || color === '' ? '' : color;
        return (
            <div style={{ display: shouldRender ? 'block' : 'none' }}>
                <Wrap>
                    <InputWrap>
                        <Label>{label}</Label>
                        <FieldWrap>
                            <ColorPicker
                                value={color}
                                name={name}
                                label={label}
                                isOpen={isOpen}
                                handleChangeOverlayColor={this.handleChangeOverlayColor}
                                handleSaveColor={this.handleSaveColor}
                                handleResetColor={this.handleResetColor}
                                id={options}
                                toggleColorPicker={this.toggleColorPicker}
                                removeOverlayColor={this.removeOverlayColor}
                            />
                            {shouldUpdate ? (
                                <input name={name} type="hidden" value={color} />
                            ) : (
                                <input name={name} type="hidden" value={defaultColor} />
                            )}
                        </FieldWrap>
                    </InputWrap>
                </Wrap>
            </div>
        );
    }
}

export default ColorPickerInput;
