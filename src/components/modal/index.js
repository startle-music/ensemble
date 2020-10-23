import React, { Component } from 'react';
import styled from 'styled-components';

const ModalHeader = styled.h2`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.main.color};
`;

const Wrap = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 8888;
    justify-content: center;
    align-items: center;
`;

const Background = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
`;

const ModalWrap = styled.div`
    width: 30rem;
    min-height: 4rem;
    max-width: 90%;
    max-height: 90%;
    background: ${props => (props.type === 'asset' ? 'transparent' : props.theme.main.boxBackground)};
    color: ${props => props.theme.menu.color};
    border-radius: ${props => props.theme.main.borderRadius};
    box-shadow: 0 5px 10px ${props => (props.type === 'asset' ? 'transparent' : 'rgba(0, 0, 0, 0.3)')};
    overflow: auto;
    padding: 2rem;
    text-align: center;
`;

class Modal extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({ isOpen: true });
    }

    close() {
        this.setState({ isOpen: false });
    }

    renderClose() {
        const { modal } = this.props;
        const { close = true, onClose = null, closeText = 'Cancel' } = modal;
        if (close) {
            return (
                <button
                    style={{ margin: '0 auto 1em auto', display: 'block' }}
                    onClick={() => onClose(null)}
                    type="button"
                >
                    {closeText}
                </button>
            );
        }
        return null;
    }

    renderHeader(header, type) {
        if (type === 'asset') {
            return null;
        }
        return <ModalHeader>{header}</ModalHeader>;
    }

    render() {
        const { modal } = this.props;
        const {
            content = 'test',
            header = 'Modal Header',
            onClose = null,
            isOpen = false,
            type = 'default',
            className = null
        } = modal;
        console.log('Modal: Render', this.props);
        if (!isOpen) {
            return null;
        }
        return (
            <Wrap>
                <Background onClick={() => onClose(null)} />
                <ModalWrap id="mainModal" type={type}>
                    {this.renderHeader(header, type)}
                    {content}
                    {this.renderClose()}
                </ModalWrap>
            </Wrap>
        );
    }
}

// Map state to props of container component
const mapStateToProps = state => ({
    modal: state.modal
});

// Connect container component to store
const ModalContainer = Modal;

export default ModalContainer;
