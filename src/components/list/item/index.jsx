import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import Form from './form';
import Marquess from '../../marquee';
import EditIcon from '../../../icons/edit-icon';
import DeleteIcon from '../../../icons/bin-icon';
import CloseIcon from '../../../icons/close-icon';
import Checkbox from '../../form/fields/checkInput';
import Button from '../../button';
import { findRowComponentValue } from '../../../../helpers';
import { TrBase, TableElementBase } from '../../table';

const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

const ListWrap = styled.div`
    display: flex;
    position: relative;
`;
const ListField = styled.div`
    flex: 1;
    padding: 10px 15px;
    &.iconWrap {
        white-space: nowrap;
        text-align: right;

        button {
            margin-left: 0.4rem;
        }
    }
`;
const FormWrap = styled.div`
    display: flex;
    width: 100%;

    form {
        display: block;
        margin: 1rem 0.4rem;
        width: 100%;

        > div {
            flex-direction: column;
        }

        .styled-select {
            margin-left: 0;
            margin-right: 0;
        }

        input,
        textarea {
            display: block;
            //width: 14rem;
            //max-width: 14rem;
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
/* tr: last - child td: first - child {
    border - bottom - left - radius: 10px;
}
tr: last - child td: last - child {
    border - bottom - right - radius: 10px;
} */
const TableWrap = styled.tr`
    ${TrBase}
`;

const TableField = styled.td`
    ${TableElementBase}

    max-width: 15rem;

    white-space: nowrap;

    &.iconWrap {
        white-space: nowrap;
        text-align: right;

        button {
            margin-left: 0.4rem;
        }
        button:first-child {
            margin-left: 0rem;
        }
    }
`;

const ChipDiv = styled.a`
    background-color: ${p => p.theme.boxColors[p.color].backgroundColor};
    color: ${p => p.theme.boxColors[p.color].borderColor};
    border-color: ${p => p.theme.boxColors[p.color].borderColor};
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    padding: 0.3rem 0.5rem;
    text-align: center;
    cursor: ${p => (p.statusId === 'Confirm Match' ? 'pointer' : 'auto')};
    font-weight: normal;
`;

const Chip = ({ statusId }) => {
    if (statusId) {
        const chipData = statusId.split('|');
        if (chipData[0] === 'Confirm Match') {
            return (
                <ChipDiv statusId={chipData[0]} to={chipData[2]} color={chipData[1]}>
                    {chipData[0]}
                </ChipDiv>
            );
        }
        return (
            <ChipDiv
                to={chipData[2]}
                onClick={event => event.preventDefault()}
                statusId={chipData[0]}
                color={chipData[1]}
            >
                {chipData[0]}
            </ChipDiv>
        );
    }
    return null;
};
class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.handleEditSelect = this.handleEditSelect.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    }

    openModal() {
        this.setState({ isEditing: true });
    }

    closeModal() {
        this.setState({ isEditing: false });
    }

    handleEditSelect() {
        const { isEditing } = this.state;
        const editing = isEditing;
        this.setState({
            isEditing: !editing
        });
    }

    handleEdit(data) {
        const { edit } = this.props;
        edit(data);
        this.setState({
            isEditing: false
        });
    }

    handleDelete() {
        const { id, delete: deleteFunction } = this.props;
        console.log(this.props);
        console.log(deleteFunction);
        deleteFunction(id);
    }

    handleClickCheckbox(data) {
        const { handleCheckbox } = this.props;
        handleCheckbox(data);
    }

    renderEdit(id) {
        return (
            <Button title="Edit" type="table-icon" key={`edit-action-${id}`} onClick={this.handleEditSelect}>
                <EditIcon title="Edit Record" />
            </Button>
        );
    }

    renderDelete(id) {
        return (
            <Button title="Delete" type="table-icon" key={`delete-action-${id}`} onClick={this.handleDelete}>
                <DeleteIcon title="Delete Record" />
            </Button>
        );
    }

    renderCheckbox(id) {
        const { item } = this.props;
        const checked = findRowComponentValue(item, 'songChecked');
        return <Checkbox id={id} name={`song-${id}`} onChange={this.handleClickCheckbox} checked={checked}></Checkbox>;
    }

    renderActions() {
        const { actions = [], id, tables } = this.props;
        let Field = ListField;
        if (tables === true) {
            Field = TableField;
        }
        if (actions.length > 0) {
            return (
                <Field className="iconWrap">
                    {actions.map(action => {
                        if (typeof action === 'function') {
                            return action(id);
                        }
                        if (action === 'edit') {
                            return this.renderEdit(id);
                        }
                        if (action === 'delete') {
                            return this.renderDelete(id);
                        }
                        if (action === 'checkbox') {
                            return this.renderCheckbox(id);
                        }
                    })}
                </Field>
            );
        }
    }

    renderField({ label, value }, key) {
        const { tables, headers } = this.props;
        const column = headers.filter(({ field }) => field === label)[0];
        let Field = ListField;
        if (tables === true) {
            Field = TableField;
        }
        switch (column.type) {
            case 'text':
                return (
                    <Field className={label} key={`row-field-${key}-${label}`}>
                        <Marquess speed={8} content={value} />
                    </Field>
                );
            case 'image':
                return (
                    <Field key={`row-field-${key}-${label}`}>
                        <img src={value} alt={`${key} preview`} />
                    </Field>
                );

            case 'datetime':
                return <Field key={`row-field-${key}-${label}`}>Date: {value}</Field>;
            case 'chip':
                return (
                    <Field>
                        <Chip statusId={value} rowId={key}></Chip>
                    </Field>
                );

            default:
                return <Field>{value}</Field>;
        }
    }

    renderEditForm() {
        const { item, headers, editType, modalHeader = 'Edit Resource' } = this.props;
        const { isEditing } = this.state;

        console.log(this.props);
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
                        width: '30rem',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '120',
                        backgroundColor: '#FFF',
                        border: '0px',
                        boxShadow: '0 0 4px rgba(0,0,0,0.4)',
                        overflow: 'auto',
                        maxHeight: '100%',
                        maxWidth: '90%'
                    }
                };
                return (
                    <Modal isOpen onRequestClose={this.closeModal} style={customStyles} contentLabel="Edit Modal">
                        <ModalHeader>
                            <h2>{modalHeader}</h2>
                        </ModalHeader>
                        <Wrap>
                            <Form data={item} headers={headers} onSubmit={this.handleEdit} />
                        </Wrap>
                        <Wrap>
                            <Button
                                style={{ margin: '0 auto 1em auto', display: 'block' }}
                                type="cancel"
                                onClick={this.closeModal}
                                product="negative"
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
    }

    render() {
        const { item, id, tables, headers } = this.props;
        const { isEditing } = this.state;

        let Wrap = ListWrap;
        if (tables === true) {
            if (isEditing === true) {
                return <Wrap key={`row-row-row-${id}`}>{this.renderEditForm()}</Wrap>;
            }
            Wrap = TableWrap;
            return (
                <Wrap key={`row-row-row-${id}`}>
                    {item.filter((field, key) => headers[key].display).map(field => this.renderField(field, id))}
                    {this.renderActions()}
                </Wrap>
            );
        }
        return (
            <div key={`row-row-wrap-${id}`}>
                <Wrap key={`row-row-row-${id}`}>
                    {item.filter((field, key) => headers[key].display).map(field => this.renderField(field, id))}
                    {this.renderActions()}
                </Wrap>
                {this.renderEditForm()}
            </div>
        );
    }
}

export default Item;
