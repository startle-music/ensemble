import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../button';

const StyledInputExpander = styled.div`
    //position: relative;
    width: 100%;
`;

const Expander = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${props => (props.expanded ? '100' : '-1')};
    background: ${p => p.theme.generalColors.white};

    @media (min-width: ${p => p.theme.layout.breakpoints.sm}) {
        position: relative;
    }
`;

const ExpanderContent = styled.div`
    width: ${props => (props.expanded ? '100%' : '0')};
    opacity: ${props => (props.expanded ? '1' : '0')};
    transition: all 0.3s;
    overflow: hidden;

    @media (min-width: ${p => p.theme.layout.breakpoints.sm}) {
        width: auto;
    }
`;

const CloseButton = styled(Button)`
    /* position: relative;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100; */
`;

const formStyles = css`
    border: 1px solid ${p => p.theme.form.input.border};
    color: ${p => p.theme.form.input.color};
    background: ${p => p.theme.form.input.background};
    //padding: 0.47rem 0.6rem
        

    &:hover, &:active, &:focus, &:hover:active {
        border: 1px solid $p =>{p.theme.form.input.border};
        color: ${p => p.theme.form.input.color};
        background: ${p => p.theme.form.input.background};
    }
`;

const formWhiteStyles = css`
    border: 1px solid ${p => p.theme.form.input.border};
    color: ${p => p.theme.form.input.border};
    background: ${p => p.theme.generalColors.white};
    //padding: 0.47rem 0.6rem

    &:hover,
    &:active,
    &:focus {
        border: 1px solid ${p => p.theme.form.input.border};
        color: ${p => p.theme.form.input.border};
        background: ${p => p.theme.generalColors.white};
        //padding: 0.47rem 0.6rem;
    }

    &:hover {
        &:active {
            border: 1px solid ${p => p.theme.form.input.border};
            color: ${p => p.theme.form.input.border};
            background: ${p => p.theme.generalColors.white};
        }
    }
`;

const selectStyles = css`
    color: ${props => props.theme.form.select.color};
    background: ${props => props.theme.form.select.background};
    border: 1px solid ${props => props.theme.form.select.border};
    //padding: 0.47rem 0.6rem

    &:hover,
    &:active,
    &:focus {
        color: ${props => props.theme.form.select.color};
        background: ${props => props.theme.form.select.background};
        border: 1px solid ${props => props.theme.form.select.border};
        //padding: 0.47rem 0.6rem;
    }

    &:hover {
        &:active {
            color: ${props => props.theme.form.select.color};
            background: ${props => props.theme.form.select.background};
            border: 1px solid ${props => props.theme.form.select.border};
        }
    }
`;

const ExpandButton = styled(Button)`
    svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    padding: 0.47rem 0.5rem;
    border-width: 1px;

    &:hover, &:active, &:focus {
        border-width: 1px;
    }

    &:hover{
        &:active{
            border-width: 1px;
        }
    }

    ${p => (p.type === 'form' ? formStyles : null)}
    ${p => (p.type === 'formWhite' ? formWhiteStyles : null)}
    ${p => (p.type === 'select' ? selectStyles : null)}

    @media (min-width: ${p => p.theme.layout.breakpoints.sm}) {
        display: none;
    }
`;

export default function InputExpander({ children, icon = faPlus, type = 'button' }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <StyledInputExpander>
            <ExpandButton type={type} onClick={() => setExpanded(true)}>
                <FontAwesomeIcon icon={icon} />
            </ExpandButton>

            <Expander expanded={expanded}>
                <ExpanderContent expanded={expanded}>{children}</ExpanderContent>

                {expanded ? (
                    <CloseButton inline onClick={() => setExpanded(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </CloseButton>
                ) : null}
            </Expander>
        </StyledInputExpander>
    );
}
