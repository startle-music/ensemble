import React, { Component } from 'react';
import styled from 'styled-components';
import HDMI from '../../icons/HDMI'; 
import theme from '../../../style/theme';
import TextPairs from '../textpairs';

const Wrap = styled.div`
    display:flex;
    font-family:'museo-sans';
    width:100%;
`;
const IconWrap = styled.div`
    width:1.5rem;
    margin-right:.5rem;
`;

const IconBoxes = ({fill,leftText='', rightText='', Icon}) => {
    return <Wrap>
        <IconWrap>
            <Icon fill={fill}/>
        </IconWrap>
        <TextPairs fill={fill} leftText={leftText} rightText={rightText}/>
    </Wrap>;
}

export default IconBoxes;