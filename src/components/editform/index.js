import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Button from '../button';
import Form from '../list/item/form';

const FormWrap = styled.div`
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

const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleEditSelect = this.handleEditSelect.bind(this);
    }

    handleEdit(data) {
        const { edit } = this.props;
        edit(data);
        this.setState({
            isEditing: false
        });
    }

    closeModal() {
        this.setState({ isEditing: false });
    }

    openModal() {
        this.setState({ isEditing: true });
    }

    handleEditSelect() {
        const { isEditing } = this.state;
        const editing = isEditing;
        this.setState({
            isEditing: !editing
        });
    }

    render() {
        const { item, headers, editType, modalHeader = 'Edit Resource' } = this.props;
        const { isEditing } = this.state;
        if (isEditing) {
            const Wrap = FormWrap;
            if (editType === 'modal') {
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
                return (
                    <Modal isOpen onRequestClose={this.closeModal} style={customStyles} contentLabel="Edit Modal">
                        <ModalHeader>
                            <h2>{modalHeader}</h2>
                        </ModalHeader>
                        <Wrap>
                            <Form data={item} headers={headers} onSubmit={this.handleEdit} />}
                        </Wrap>
                        <Wrap>
                            <Button
                                product="negative"
                                style={{ margin: '0 auto 1em auto', display: 'block' }}
                                type="cancel"
                                onClick={this.closeModal}
                            >
                                Cancel
                            </Button>
                        </Wrap>
                    </Modal>
                );
            }
            return (
                <Wrap>
                    <Form data={item} headers={headers} onSubmit={this.handleEdit} />
                </Wrap>
            );
        }
        return null;
    }
}
export default EditForm;
