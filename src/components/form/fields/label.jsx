import React from 'react';

import styled from 'styled-components';

const LabelWrap = styled.label`
    display: block;
    font-size: 1.2rem;
    font-family: ${props => props.theme.main.font};
    padding-bottom: 0.5rem;
    box-sizing: border-box;
    color: ${props => props.theme.main.color};
    margin: 0;
    margin-bottom: ${props => props.margin || '.75em'};
`;

const StyledRequired = styled.span`
    display: inline-block;
    margin-left: 0.3rem;
`;

const Label = ({ children, required = false }) => {
    let Required = () => null;
    if (required) {
        Required = () => <StyledRequired>*</StyledRequired>;
    }
    return (
        <LabelWrap>
            {children}
            <Required />
        </LabelWrap>
    );
};

export default Label;
