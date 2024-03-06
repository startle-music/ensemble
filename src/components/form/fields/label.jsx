import React from 'react';

import styled from 'styled-components';

const LabelWrap = styled.div`
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
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
