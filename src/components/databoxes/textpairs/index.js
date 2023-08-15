import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display:flex;
    width:100%;
    font-family: inherit;
    
`;
const TextWrap = styled.span`
    display: flex;
    align-items: center;
`;

const LeftText = styled(TextWrap)`
    font-size:18px;
    color:${({ fill }) => fill ? fill : '#000000'};
    font-weight:700;
    padding:0 .5rem 0 0;
`

const RightText = styled(TextWrap)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color: '#333333';
`

const TextPairs = ({fill,leftText='', rightText='', Icon}) => {
    return (<Wrap>
        <LeftText fill={fill}>{leftText}</LeftText>
        <RightText>{rightText}</RightText>
    </Wrap>);
}

export default TextPairs;