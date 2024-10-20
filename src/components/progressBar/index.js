import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';

const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Text = styled.span`
    color: ${({ color }) => color};
    padding: 0 1rem;
`;

const ProgressBarFiller = styled.div`
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    transition: width 0.25s ease-in;
    background-color: ${({ color }) => color};
    border-radius: 1rem;
    text-align: right;
    &:after {
        content: '.';
        visibility: hidden;
    }
`

const ProgressBarTotal = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: ${theme.colors.fadeToGrey};
    border-radius: 1rem;
`

const getBarColor = (progress) => {
    if (progress === 100) {
        return theme.colors.greenDay;
    }
    return theme.colors.simplyRed;
};

const ProgressBar = ({ progress, text = true }) => {
    const color = getBarColor(progress);
    return (
        <ProgressBarContainer progress={progress} color={color}>
            <ProgressBarTotal>
                <ProgressBarFiller progress={progress} color={color}/>
            </ProgressBarTotal>
            { text ? <Text>{`${progress}%`}</Text> : null }
        </ProgressBarContainer>
    );
};

export default ProgressBar;
