import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const Wrap = styled.div`
    display: block;
    position: relative;
`

const TabContent = ({
    children,
    ...rest
}) => {

    return (
        <Wrap {...rest}>
            { children }
        </Wrap>
    );
}

export default TabContent;
