import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { updateToolTip } from '../tooltip/actions';
import { debounce } from '../../utilities';

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
};

export default HoverIcon;
