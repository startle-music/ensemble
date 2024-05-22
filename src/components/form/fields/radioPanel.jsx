import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Text from '../../text';

const StyledRadioPanel = styled.div`
    width: 100%;
    position: relative;
`;

const Label = styled.label`
    position: relative;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    display: block;
    width: 100%;
    padding: 2rem 1rem;

    border: ${props =>
        props.checked ? `1px solid ${props.theme.main.brand}` : `1px solid ${props.theme.main.border}`};
    background-color: ${props => (props.checked ? `${props.theme.main.brand}33` : 'transparent')};
    border-radius: ${props => props.theme.layout.borderRadius.lg};
    color: ${props => (props.checked ? props.theme.main.brand : props.theme.main.background)};
    transition: all 0.35s;

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        padding: 3rem 2rem;
    }
`;

const RadioPlaceholder = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);

    background-color: ${props => (props.checked ? `${props.theme.main.brand}` : 'tranparent')};
    border: ${props =>
        props.checked ? `1px solid ${props.theme.main.brand}` : `1px solid ${props.theme.main.border}`};
    padding: 0.75rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    color: ${props => props.theme.main.contrastColor};

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        top: 1rem;
        right: 1rem;
        transform: translateY(0);
    }

    svg {
        opacity: ${props => (props.checked ? 1 : 0)};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Radio = styled.input.attrs({ type: 'radio' })`
    position: absolute;
    opacity: 0;
`;

const PanelBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
        justify-content: center;
        flex-direction: column;
    }

    svg {
        width: 2rem !important; //ugly hack to override fontawesome default size
        height: 2rem;
        margin-right: 1rem;

        @media (min-width: ${p => p.theme.layout.breakpoints.md}) {
            margin-bottom: ${props => props.theme.layout.padding.vertical.sm};
            margin-right: 0;
            width: 3rem !important; //ugly hack to override fontawesome default size
            height: 3rem;
        }
    }
`;

const P = styled(Text)`
    color: ${props => props.theme.main.color};
    font-weight: normal;
`;

export default function RadioPanel({ name, index, checked, setChecked, value, label, icon }) {
    // add prop to parent if radio is checked
    const n = name + index;

    return (
        <StyledRadioPanel>
            <Label checked={checked} htmlFor={n}>
                <RadioPlaceholder checked={checked}>
                    <FontAwesomeIcon icon={faCheck} />
                </RadioPlaceholder>
                <Radio id={n} name={name} value={value} checked={checked} onChange={e => setChecked(e.target.value)} />
                <PanelBody>
                    <FontAwesomeIcon icon={icon} />
                    <P>{label}</P>
                </PanelBody>
            </Label>
        </StyledRadioPanel>
    );
}
