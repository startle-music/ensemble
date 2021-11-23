import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';
import theme from '../../../style/theme';

const SliderDiv = styled.div`
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 23px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 19px;
        width: 19px;
        left: 1px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: ${props => theme.products[props.product || 'default'].primary};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${props => theme.products[props.product || 'default'].primary};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(19px);
        -ms-transform: translateX(19px);
        transform: translateX(19px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;
const PaddedLabel = styled(Label)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;
const SpanLabel = styled.span`
    font-size: 1.1em;
    margin-left: 0.75rem;
`;

class Slider extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (typeof this.props.onChange === 'function' && this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    }

    render() {
        const { name, id, checked, value, label, product, className = null } = this.props;
        return (
            <SliderDiv product={product} className={className}>
                <PaddedLabel htmlFor={name}>
                    <div><div htmlFor={name} className="switch">
                        <input onChange={this.onChange} id={id} value={value} checked={checked} type="checkbox" />
                        <span className="slider round"></span>
                    </div>
                    </div>
                    <SpanLabel className="spanLabel">{label}</SpanLabel>
                </PaddedLabel>
            </SliderDiv>
        );
    }
}

export default Slider;
