import React, { Component } from 'react';
import Button from '../button';

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
            <form ref="form" onSubmit={this.submit}>
                {children}
                <div>
                    <Button product="positive" type="submit-modal">
                        {buttonText}
                    </Button>
                </div>
            </form>
        );
    }
}

export default Form;
