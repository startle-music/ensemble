// CircularProgress.js
import React from 'react';
import styled, { css } from 'styled-components';

const CircleBackground = styled.circle`
    fill: none;
    stroke: ${p => p.theme.main.background};
`;

const CircleProgress = styled.circle`
    fill: none;
    stroke: ${p => p.theme.main.brand};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: ${props => props.dashArray};
    stroke-dashoffset: ${props => props.dashOffset};
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
`;

const SvgContainer = styled.svg`
    display: block;
    margin: 10px;
    max-width: 100%;
`;

const CircularProgress = ({ progress, max = 100, size, strokeWidth = 10 }) => {
    const radius = (size - 10) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / max) * circumference;

    return (
        <SvgContainer width={size} height={size}>
            <CircleBackground stroke-width={strokeWidth} r={radius} cx={size / 2} cy={size / 2} />
            <CircleProgress
                stroke-width={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                dashArray={circumference}
                dashOffset={offset}
            />
        </SvgContainer>
    );
};

export default CircularProgress;
