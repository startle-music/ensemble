import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../button';

const Preview = styled.div``;
const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const CancelButton = styled.button`
    border: none;
    box-shadow: none;
    color: #787e89;
`;

const Wrap = styled.div`
    display: flex;
    width: 100%;

    form {
        > div {
            flex-direction: column;
        }
        margin: 1rem 0.4rem;

        input,
        textarea {
            display: block;
            width: 14rem;
            max-width: 14rem;
        }

        label {
            display: block;
            text-align: left;
            margin: 0 2rem 0 0;
            padding: 0.6rem;
            color: #000;
        }
    }
`;

const SubmitModalBtnBase = styled.button`
    padding: 0.75rem 2rem;
    font-size: 1rem;
    text-decoration: none;
    position: relative;
    display: block;
    text-align: center;
    box-sizing: border-box;
    font-weight: bold;
    border-radius: 10rem;
    cursor: pointer;
    box-shadow: 0px 2px 5px ${transparentize(0.8, '#000')};

    /* if a button is followed by a button add left margin to the trailing button */
    & + button,
    & + a {
        margin-left: 3px;
    }

    svg {
        fill: currentColor;
        height: 1.1rem;
        width: 1em;
    }
    max-width: 8em;
    border-radius: 2em;
    display: block;
    margin: 3em auto 0em auto;
    background: ${props => (props.color ? props.color : theme.mainColors.greenDay)};
    border: 1px solid ${props => (props.color ? props.color : theme.mainColors.greenDay)};
    color: #fff;

    &:disabled {
        opacity: 1;
        cursor: default;
    }
    &:hover {
        opacity: 1;
    }
    &:active {
        opacity: 1;
    }
`;

const customStyles = {
    overlay: {
        zIndex: '120',
        backgroundColor: 'rgba(15, 15, 15, 0.7)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '120',
        backgroundColor: '#FFF',
        border: '0px',
        boxShadow: '0 0 4px rgba(0,0,0,0.4)'
    }
};
Modal.setAppElement('#app');

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.confirmRef = React.createRef();
        this.confirm = this.confirm.bind(this);
        this.abort = this.abort.bind(this);
    }

    componentDidMount() {
        return this.confirmRef.current ? this.confirmRef.current.focus() : '';
    }

    componentWillUnmount() {}

    abort() {
        const { wrapper, clean, reject } = this.props;
        reject();
        clean(wrapper);
    }

    confirm() {
        const { wrapper, clean, resolve } = this.props;
        resolve();
        clean(wrapper);
    }

    afterOpenModal() {}

    render() {
        const { abortLabel, confirmLabel, modalHeader, message, color } = this.props;
        const colorDictionary = {
            red: theme.mainColors.simplyRed,
            green: theme.mainColors.greenDay
        };
        return (
            <Modal isOpen onAfterOpen={this.afterOpenModal} style={customStyles} contentLabel="Confirm Deletion">
                <ModalHeader>
                    <h2>{modalHeader}</h2>
                </ModalHeader>
                <Wrap>
                    <p>{message}</p>
                </Wrap>
                <Wrap>
                    <SubmitModalBtnBase color={colorDictionary[color]} onClick={this.confirm}>
                        {confirmLabel}
                    </SubmitModalBtnBase>
                </Wrap>
                <Wrap style={{ justifyContent: 'center' }}>
                    <CancelButton type="button" className="btn btn-default" onClick={this.abort}>
                        {abortLabel}
                    </CancelButton>{' '}
                </Wrap>
            </Modal>
        );
    }
}

function cleanup(wrapper) {
    ReactDOM.unmountComponentAtNode(wrapper);
    return setTimeout(function() {
        return wrapper.remove();
    });
}

export const confirm = function(
    message,
    options = { confirmLabel: 'OK', abortLabel: 'Cancel', modalHeader: '', color: 'green' }
) {
    const props = $.extend(
        {
            message
        },
        options
    );
    return new Promise((resolve, reject) => {
        const wrapper = document.body.appendChild(document.createElement('div'));
        ReactDOM.render(
            <Confirm {...props} clean={cleanup} wrapper={wrapper} resolve={resolve} reject={reject} />,
            wrapper
        );
    });
};
