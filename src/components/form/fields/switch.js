import React from 'react';
import styled from 'styled-components';
import Label from '../labels';
import theme from '../../../style/theme';

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
        background-color: ${props => props.primaryColour};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px  ${props => props.primaryColour};
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


const getColours = (colour) => {
    
    let altColour = theme.selectionPanel.color;
    let primaryColour = theme.selectionPanel.background;
        
    if(theme.colors[colour]) {
        altColour = theme.generalColors.white;
        primaryColour = theme.colors[colour];
    }

    return { altColour, primaryColour };
}

const Switch = ({name, id, checked, value, label, colour='simplyRed', className = null, ...rest}) => {
    
    const attributes = {...rest, ...getColours(colour, checked)};
    console.log('switch attributes', attributes);
    return (
        <Wrap className={className} {...attributes}>
            <PaddedLabel htmlFor={name} {...attributes}>
                <div className="switch">
                    <input id={id} name={name} value={value} defaultChecked={checked} type="checkbox" {...attributes} />
                    <span className="slider round" {...attributes}></span>
                </div>
                <SpanLabel className="spanLabel">{label}</SpanLabel>
            </PaddedLabel>
        </Wrap>
    );
}

export default Switch;
