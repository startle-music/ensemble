import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import Field from '../labels';
import theme from '../../../style/theme';

const LabelWrap = styled.div`
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    padding-bottom: 0.5rem;
`

const StyledRequired = styled.span`
    display: inline-block;
    margin-left: 0.3rem;
`;

const Wrap = styled.div`
    background: ${({inputBackground}) => inputBackground};
    color: ${({inputColour}) => inputColour};
    border-radius: 0.4rem;
    padding: 0 0.4rem;
    opacity: ${({disabled = false}) => disabled ? '0.4' : '1'};

    &:focus-within {
        background: ${props => lighten(0.1, theme.colors.mrBlueSky)};
        color: ${props => theme.colors.paintItBlack};
    }

    
`

const Input = styled.input`
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 1rem;
    padding: 0.8rem 0.4rem;
    color: inherit;

    &:focus {
        outline: none;
    }
`

const Label = ({children, required = false}) => {
    let Required = () => null;
    if(required) {
        Required = () => <StyledRequired>*</StyledRequired>;
    }
    return (
        <LabelWrap>{children}<Required /></LabelWrap>
    );
}

const CaptionWrap = styled.p`
    color: ${({inputColour}) => inputColour};
    font-family: MuseoSansReg, sans-serif;
    font-size: 0.75rem;
    margin: 0.6rem 0;
`;

const Caption = ({children, inputColour}) => {
    if(children === null) {
        return null;
    }
    return (
        <CaptionWrap inputColour={inputColour}>{children}</CaptionWrap>
    )
};

const getColours = (status) => {
    const colourObject = {
        inputBackground: theme.text.input.background,
        inputColour: theme.generalColors.darkGrey
    }

    if(theme.statusColours[status]) {
        colourObject.inputBackground = theme.statusColours[status].backgroundColor;
        colourObject.inputColour = theme.statusColours[status].textColor;
    }

    return colourObject;
}

/**
 * 
 * @prop {label} string
 * @returns 
 */
const FieldComponent = ({id, name, prepend=null, append=null, label=null, type='text', caption=null, required=false, placeholder=false, defaultValue = null, status = null, ...rest}) => {

    let Prepend = () => null;
    if(prepend !== null) {
        Prepend = () => <>{prepend}</>
    }

    let Append = () => null;
    if(append !== null) {
        Append = () => <>{append}</>
    }

    const colours = getColours(status);
       
    return (
        <Field htmlFor={name}>
            { label !== null ? <Label required={required}>{label}</Label> : null }
            <Wrap {...{...rest, ...colours}}>
                <Prepend />     
                <Input
                    type={type}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    id={id}
                    {...colours}
                    {...rest}
                />
                <Append />
            </Wrap>
            <Caption {...colours}>{caption}</Caption>
        </Field>
    );
}

export default FieldComponent;
