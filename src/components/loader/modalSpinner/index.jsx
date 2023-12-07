import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Loader from '../spinner';

ReactModal.setAppElement('#app');

const Wrap = styled.div`
    display: flex;
    position: relative;
    z-index: 2147483599;
    justify-content: center;
    align-items: center;
`;
const Spinner = ({ height = '120px', width = '120px' }) => <Loader />;

const customStyles = {
    content: {
        zIndex: '2147483599',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgb(255, 255, 255, 0)',
        border: 'rgb(255, 255, 255, 0)'
    },
    overlay: {
        zIndex: '2147483599',
        backgroundColor: 'rgba(0, 0, 0, .6)'
    }
};

const modalIsOpen = true;

const ModalLoader = ({ width, height }) => (
    <ReactModal isOpen={modalIsOpen} style={customStyles} contentLabel="Uploading Signage">
        <Wrap>
            <Spinner width={width} height={height} />
        </Wrap>
    </ReactModal>
);

export default ModalLoader;
