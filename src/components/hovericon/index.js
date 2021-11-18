import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { updateToolTip } from '../tooltip/actions';
import { debounce } from '../../utilities';
import QuestionMark from '../icons/QuestionMark';

const Wrap = styled(motion.div)``;

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

const onHoverStart = (wrapRef, dispatch, width, height, text) => {
    if (!isTouchDevice()) {
        const position = wrapRef.current.getBoundingClientRect();
        console.log(position);
        const x = position.x + position.width / 2 - width * 8;
        const y = position.top - height * 16;
        dispatch(
            updateToolTip({
                content: text,
                isOpen: true,
                maxWidth: `${width}rem`,
                maxHeight: `${height}rem`,
                x: `${x}px`,
                y: `${y}px`,
            })
        );
    }
};
const onHoverEnd = (dispatch) => {
    dispatch(
        updateToolTip({
            isOpen: false,
        })
    );
};

const HoverIcon = ({ width = 13, height = 4.2, text }) => {
    const dispatch = useDispatch();
    const wrapRef = useRef(null);
    return (
        <Wrap
            ref={wrapRef}
            onMouseOver={() => debounce(onHoverStart(wrapRef, dispatch, width, height, text), 500)}
            onMouseOut={() => debounce(onHoverEnd(dispatch), 500)}
        >
            <QuestionMark/>
        </Wrap>
    );
};

export default HoverIcon;
