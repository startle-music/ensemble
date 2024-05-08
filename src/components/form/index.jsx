import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../button';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormRowStyled = styled.div`
    display: ${props => (props.display ? props.display : 'flex')};
    flex-direction: ${props => (props.inline ? 'row' : 'column')};
    padding: 0 0 ${props => props.theme.container.padding.vertical.lg} 0;
`;

export function FormRow({ inline = false, display = false, nested, children }) {
    return (
        <FormRowStyled inline={inline} nested={nested} display={display}>
            {children}
        </FormRowStyled>
    );
}

function Form({ children, submitButton, onSubmit, forwardRef = null, ...rest }) {
    /* submit(e) {
        const { form } = this.refs;
        const { onSubmit } = this.props;
        e.preventDefault();
        const tForm = [...form].filter(item => item.name.length > 0 && !item.validity.valid);
        if (tForm.length === 0 && typeof onSubmit === 'function') {
            const formData = [...form]
                .filter(item => item.name.length > 0)
                .reduce((total, current) => {
                    total[current.name] = current.value;
                    return total;
                }, {});
            console.log(formData);
            onSubmit(formData);
        } else {
            alert('@Devs. no no no no. Pass edit function pls');
        }
    } */

    return (
        <FormStyled ref={forwardRef} onSubmit={onSubmit} {...rest}>
            {children}
            {submitButton}
        </FormStyled>
    );
}

export default Form;
