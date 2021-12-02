import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Label from '../labels';

const Wrap = styled.div`
    font-family: MuseoSansReg, sans-serif;

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
        background-color: ${props => props.theme.products[props.product || 'default'].primary};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${props => props.theme.products[props.product || 'default'].primary};
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
    cursor: pointer;
`;
const SpanLabel = styled.span`
    font-size: 1.1em;
    margin-left: 0.75rem;
`;

const Switch = ({name, id, checked, value, label, product, className = null}) => {
    
    return (
        <Wrap product={product} className={className}>
            <PaddedLabel htmlFor={name}>
                <div className="switch">
                    <input id={id} name={name} value={value} defaultChecked={checked} type="checkbox" />
                    <span className="slider round"></span>
                </div>
                <SpanLabel className="spanLabel">{label}</SpanLabel>
            </PaddedLabel>
        </Wrap>
    );
}

export default Switch;
