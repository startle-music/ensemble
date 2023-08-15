import React, { Component } from 'react';
import styled from 'styled-components';
import TextPairs from '../textpairs';

const Wrap = styled.div`
    display:flex;
    width:100%;
    font-family: ${(props) => props.theme && props.theme.main.font ? props.theme.main.font : 'inherit'};
    align-items:center;
`;
const IconWrap = styled.div`
    width:1.5rem;
    margin-right:.5rem;
    color: ${props => props.fill};
`;

const IconBoxes = ({fill,leftText='', rightText='', Icon}) => {
    return <Wrap>
        <IconWrap fill={fill}>
            <Icon fill={fill}/>
        </IconWrap>
        <TextPairs fill={fill} leftText={leftText} rightText={rightText}/>
    </Wrap>;
}

export default IconBoxes;