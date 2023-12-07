import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrap = styled(motion.div)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    overflow: visible;
    z-index: 100;
`;

const ToolTipWrap = styled(motion.div)`
    position: absolute;
    top: ${({ y }) => `${y}`};
    left: ${({ x }) => `${x}`};
`;

const ToolTip = styled(motion.div)`
    display: block;
    position: relative;
    background: #ffffff;
    color: #222222;
    width: 100vw;
    height: 100vh;
    min-width: 5rem;
    min-height: 2rem;
    max-width: ${({ maxWidth }) => `${maxWidth}`};
    max-height: ${({ maxHeight }) => `${maxHeight}`};
    padding: 0.3rem 0.6rem;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid grey;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    &:before,
    &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
    }
    &:before {
        border-left: 10px solid transparent;
        border-top: 10px solid grey;
        border-right: 10px solid transparent;
        left: calc(50% - 10px);
        bottom: -9px;
        z-index: -1;
    }
    &:after {
        border-left: 8px solid transparent;
        border-top: 8px solid #ffffff;
        border-right: 8px solid transparent;
        left: calc(50% - 8px);
        bottom: -8px;
    }
`;

const Contents = ({ content }) => {
    if (typeof content === 'string') {
        return <>{content}</>;
    }

    if (content === null) {
        return null;
    }

    return content;
};

const ToolTipContents = ({ isOpen, content, x, y, maxWidth, maxHeight }) => {
    if (isOpen === false || content === null) {
        return null;
    }

    return (
        <ToolTipWrap x={x} y={y}>
            <ToolTip maxWidth={maxWidth} maxHeight={maxHeight}>
                <Contents {...{ content }} />
            </ToolTip>
        </ToolTipWrap>
    );
};

const ToolTipContainer = ({ reducer = 'tooltip' }) => {
    const { isOpen, content, x, y, maxWidth, maxHeight } = {
        isOpen: false,
        content: '',
        x: 0,
        y: 0,
        maxWidth: 999,
        maxHeight: 999
    };

    return (
        <Wrap>
            <ToolTipContents {...{ isOpen, content, x, y, maxWidth, maxHeight }} />
        </Wrap>
    );
};

export default ToolTipContainer;
