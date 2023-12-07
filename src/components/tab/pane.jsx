import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Wrap = styled.div`
    display: none;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s linear;

    &.active {
        display: block;
        opacity: 1;
        
    }

`

const TabPane = ({
    checked = false,
    children,
    ...rest
}) => {

    return (
        <Wrap className={checked? 'active' : ''} {...rest}>
            { children }
        </Wrap>
    );
}

export default TabPane;
