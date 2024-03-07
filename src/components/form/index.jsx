import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../button';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormRowStyled = styled.div`
    display: flex;
    flex-direction: ${props => (props.inline ? 'row' : 'column')};
    padding: 0 0 ${props => props.theme.container.padding.vertical.lg} 0;
`;

export function FormRow({ inline = false, nested, children }) {
    return (
        <FormRowStyled inline={inline} nested={nested}>
            {children}
        </FormRowStyled>
    );
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        console.log('item form', props);
    }

    submit(e) {
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
    }

    render() {
        const { children, buttonText = 'Submit' } = this.props;
        return (
            <FormStyled ref="form" onSubmit={this.submit}>
                {children}
                <div>
                    <Button product="positive" type="submit-modal">
                        {buttonText}
                    </Button>
                </div>
            </FormStyled>
        );
    }
}

export default Form;
