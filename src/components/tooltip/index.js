import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    const { isOpen, content, x, y, maxWidth, maxHeight } = useSelector((state) => state[reducer]);

    return (
        <Wrap>
            <ToolTipContents {...{ isOpen, content, x, y, maxWidth, maxHeight }} />
        </Wrap>
    );
};

export default ToolTipContainer;

/* const HoverIcon = () => (
    <Wrap>
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="question-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-question-circle fa-w-16 fa-2x"
        >
            <path
                fill="currentColor"
                d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"
                className=""
            />
        </svg>
    </Wrap>
);

export default HoverIcon; */
