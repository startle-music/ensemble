import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: ${props => (props.inline ? `inline-block` : `flex`)};
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;
`;

const WrapAbsolute = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Spinner = ({ height = '120px', width = '120px', fill = '#fff' }) => (
    <svg width={width} height={height} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                <stop stopColor={fill} stopOpacity="0" offset="0%" />
                <stop stopColor={fill} stopOpacity=".631" offset="63.146%" />
                <stop stopColor={fill} offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" strokeWidth="2">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </path>
                <circle fill={fill} cx="36" cy="18" r="1">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </g>
    </svg>
);

const Loader = ({ width, height, type, fill }) => {
    switch (type) {
        case 'inline':
            return (
                <Wrap inline>
                    <Spinner width={width} height={height} fill={fill} />
                </Wrap>
            );
        case 'absolute':
            return (
                <WrapAbsolute>
                    <Spinner width={width} height={height} fill={fill} />
                </WrapAbsolute>
            );
        default:
            return (
                <Wrap>
                    <Spinner width={width} height={height} fill={fill} />
                </Wrap>
            );
    }
};

export default Loader;
