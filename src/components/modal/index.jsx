import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const ModalHeader = styled.div`
    color: ${props => props.theme.main.color};
    padding: ${props => props.theme.layout.padding.vertical} ${props => props.theme.layout.padding.horizontal};
    //remove margin on text and header
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
`;

export const ModalBody = styled.div`
    color: ${props => props.theme.main.color};
`;

export const ModalFooter = styled.div`
    border-top: 1px solid ${props => props.theme.main.border};
    color: ${props => props.theme.main.color};
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.layout.padding.vertical} ${props => props.theme.layout.padding.horizontal};
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
    background: ${props => (props.transparent ? 'transparent' : props.theme.main.boxBackground)};
    color: ${props => props.theme.main.color};
    border-radius: ${props => props.theme.main.borderRadius};
    box-shadow: 0 5px 10px ${props => (props.transparent ? 'transparent' : 'rgba(0, 0, 0, 0.3)')};
    overflow: auto;
    //padding: 2rem;
    text-align: center;
`;

/**
 *
 * @param {*} param0
 * @returns
 * @description Top Level Modal Component needs to be used as close to your root as possible to allow for proper z-indexing
 */

function Modal({
    content = null,
    onClose = () => {},
    onOpen = () => {},
    isOpen = false,
    transparent = false,
    className = null
}) {
    useEffect(() => {
        onOpen();

        return () => {
            onClose();
        };
    }, [onClose, onOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <Wrap>
            <Background onClick={() => onClose(null)} />
            <ModalWrap id="mainModal" transparent={transparent}>
                {content}
            </ModalWrap>
        </Wrap>
    );
}

export default Modal;
