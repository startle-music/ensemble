import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import Field from '../labels';
import theme from '../../../style/theme';
import Label from './label';

const Wrap = styled.div`
    display: flex;
    align-items: center;
    background: ${({ inputBackground }) => inputBackground};
    color: ${({ inputColour }) => inputColour};
    border-radius: ${({ rounded }) => (rounded === true ? '2.5rem' : '0.4rem')};
    padding: 0 0.4rem;
    opacity: ${({ disabled = false }) => (disabled ? '0.4' : '1')};
    border: 1px solid ${({ inputBorder }) => inputBorder};

    &:focus-within {
        //background: ${props => lighten(0.1, props.inputBackground)};
        //color: ${props => props.inputColour};
    }
`;

const Input = styled.input`
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    font-size: 1rem;
    padding: 0.8rem 0.4rem;
    color: inherit;
    width: 100%;
    font-family: ${props => props.theme.main.font};

    &::placeholder {
        color: ${({ inputColour }) => inputColour};
        opacity: 1; /* Firefox */
    }

    &:focus {
        outline: none;
    }
`;

const CaptionWrap = styled.p`
    color: ${({ inputColour }) => inputColour};
    font-family: ${p => p.theme.main.font};
    font-size: 0.75rem;
    margin: 0.6rem 0;
`;

const Caption = ({ children, inputColour }) => {
    if (children === null) {
        return null;
    }
    return <CaptionWrap inputColour={inputColour}>{children}</CaptionWrap>;
};

const getColours = status => {
    const colourObject = {
        inputBackground: 'black',
        inputColour: 'white'
    };

    // if(theme.statusColours[status]) {
    // colourObject.inputBackground = theme.statusColours[status].backgroundColor;
    // colourObject.inputColour = theme.statusColours[status].textColor;
    // }

    return colourObject;
};

/**
 *
 * @prop {label} string
 * @returns
 */
const FieldComponent = ({
    id,
    name,
    inputBackground = null,
    inputColour = null,
    inputBorder = null,
    prepend = null,
    append = null,
    label = null,
    type = 'text',
    caption = null,
    required = false,
    placeholder = false,
    defaultValue = null,
    status = null,
    ...rest
}) => {
    let Prepend = () => null;
    if (prepend !== null) {
        Prepend = () => <>{prepend}</>;
    }

    let Append = () => null;
    if (append !== null) {
        Append = () => <>{append}</>;
    }

    let colours = {
        inputBackground: 'white',
        inputColour: 'black',
        inputBorder: theme.main.border
    };

    if (inputBackground !== null) {
        colours = {
            ...colours,
            ...{
                inputBackground
            }
        };
    }

    if (inputColour !== null) {
        colours = {
            ...colours,
            ...{
                inputColour
            }
        };
    }

    if (inputBorder !== null) {
        colours = {
            ...colours,
            ...{
                inputBorder
            }
        };
    }

    return (
        <Field htmlFor={name} block>
            {label !== null ? <Label required={required}>{label}</Label> : null}
            <Wrap {...{ ...rest, ...colours }}>
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
};

export default FieldComponent;
