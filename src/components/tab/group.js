import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Wrap = styled.div`

`;
const Tabs = styled.div`
    border-bottom: 1px solid ${theme.colors.fadeToGrey};
    padding: 0;    
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    height: 2rem;
    overflow-y: none;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    > a {
        scroll-snap-align: start;
    }
`

const TabGroup = ({
    children,
    ...rest
}) => {

    return (
        <Wrap {...rest}>
            <Tabs>
                { children }
            </Tabs>
        </Wrap>
    );
}

export default TabGroup;
