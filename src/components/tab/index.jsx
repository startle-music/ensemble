import React from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.a`
    display: inline-block;
    color: ${props => props.theme.tabs.tab.color};
    padding: 0.3rem 0.6rem;
    font-size: 1rem;
    font-family: ${theme.main.font};
    border-bottom: 3px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;

    &.active {
        color: ${props => props.theme.tabs.tab.active};
        border-bottom: ${props => props.theme.tabs.tab.border};
    }
`;

const Tab = ({ id, checked = false, children, ...rest }) => (
    <Wrap id={id} key={`tab-${id}`} className={checked ? 'active' : ''} {...rest}>
        {children}
    </Wrap>
);

export default Tab;
