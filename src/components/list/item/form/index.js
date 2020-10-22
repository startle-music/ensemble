import React, { Component } from 'react';
import styled from 'styled-components';

import FormModule from '../../../form';
import { Select, CheckBox, Radio, Field, Hidden, ChipSelect, TimeSelect, ColorPicker } from '../../../form/fields';

const Wrap = styled.form``;
const Fields = styled.div``;
const Submit = styled.div``;

class Form extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(data) {
        const { onSubmit } = this.props;
        onSubmit(data);
    }

    renderFields() {
        const { data, headers } = this.props;
        return data.map((item, key) => {
            const { editable, title, type, options = [] } = headers[key];
            const { label, value } = item;

            switch (type) {
                case 'select':
                    return <Select label={title} name={label} disabled={!editable} options={options} value={value} />;

                case 'checkbox':
                    return <CheckBox label={title} name={label} disabled={!editable} value={value} />;

                case 'radio':
                    return <Radio label={title} name={label} disabled={!editable} value={value} />;

                case 'hidden':
                    return <Hidden label={title} name={label} disabled={!editable} value={value} />;

                case 'DateTime':
                    return <TimeSelect label={title} name={label} disabled={!editable} value={value} />;

                case 'ChipSelect':
                    return (
                        <ChipSelect
                            options={value.ChipsData}
                            chips={value.ChipsValues}
                            name={label}
                            id="ChipSelectInput1"
                            label={title}
                            required
                        />
                    );
                case 'colorpicker':
                    return <ColorPicker value={value} name={label} label={title} />;

                default:
                    return <Field label={title} name={label} disabled={!editable} value={value} options={options} />;
            }
        });
    }

    render() {
        return <FormModule onSubmit={this.submit}>{this.renderFields()}</FormModule>;
    }
}

export default Form;
