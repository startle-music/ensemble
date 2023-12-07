import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    transform: rotate(${props => `${props.dir}`});
`;

const arrowIcon = ({ dir }) => {
    let verb = 0;
    switch (dir) {
        case 'up':
            verb = '-90deg';
            break;
        case 'down':
            verb = '90deg';
            break;
        case 'left':
            verb = '180deg';
            break;
        case 'right':
        default:
            verb = '0deg';
    }
    return (
        <SVG
            dir={verb}
            className="icon arrow-icon"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            width="12.4"
            height="22.3"
            viewBox="0 0 12.4 22.3"
        >
            <path d="M4,11.2c0-3.8-3.5-8.3-3.5-8.3c-0.6-0.7-0.6-1.7,0-2.4c0.6-0.7,1.7-0.7,2.3,0l9.1,9.5c0.6,0.7,0.6,1.7,0,2.4	l-9.1,9.5c-0.6,0.7-1.7,0.7-2.3,0c-0.6-0.7-0.6-1.7,0-2.4C0.5,19.5,4,15,4,11.2z" />
        </SVG>
    );
};

export default arrowIcon;
