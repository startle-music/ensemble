import React, { Component } from 'react';
import styled from 'styled-components';
import theme from '../../../style/theme';

const Wrap = styled.div`
    display:flex;
    width:100%;
    font-family: ${theme.main.font};
    
`;
const TextWrap = styled.span`
    display: flex;
    align-items: center;
`;

const LeftText = styled(TextWrap)`
    font-size:18px;
    color:${({ fill }) => fill ? fill : theme.colors.paintItBlack};
    font-weight:700;
    padding:0 .5rem 0 0;
`

const RightText = styled(TextWrap)`
    font-size:15px;
    font-weight:500;
    min-width:2rem;
    color:${()=>theme.generalColors.darkGrey}
`

const TextPairs = ({fill,leftText='', rightText='', Icon}) => {
    return (<Wrap>
        <LeftText fill={fill}>{leftText}</LeftText>
        <RightText>{rightText}</RightText>
    </Wrap>);
}

export default TextPairs;