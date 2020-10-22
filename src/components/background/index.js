import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2e364c;
    z-index: 1;
`;

const fadeIn = keyframes`
    0% { opacity: 0; }
    33% { opacity: 0; }
    99%   { opacity: 0.5; }
`;

const Inner = styled.div`
    position: absolute;
    background-image: url(${props => props.src});
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(0px);
    transform: scale(1.2);
    animation: ${fadeIn} 3s;
`;

const Background = ({ src = null }) => (
    <Wrap className="background">
        <Inner className="background__inner" src={src} />
    </Wrap>
);

export default Background;
