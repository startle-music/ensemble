import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Wrap = styled.a`
    display: inline-block;
    color: ${theme.mainColors.paintItBlack};
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-family: MuseoSansReg, sans-serif;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &.active {
        color: ${theme.mainColors.simplyRed};
        border-bottom: 3px solid ${theme.mainColors.simplyRed};
    }
`

const Tab = ({
    id,
    checked = false,
    children,
    ...rest
}) => {

    return (
        <Wrap id={id} key={'tab-'+id} className={checked? 'active' : ''} {...rest}>
            { children }
        </Wrap>
    );
}

export default Tab;
