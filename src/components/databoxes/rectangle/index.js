import React from 'react';
import styled from 'styled-components';
import Text from '../../text';

const Wrap = styled.div`
    padding:.75rem;
    border-radius:10px;
    background-color:#fff;
`

const Children = styled.div`
    margin-top:.25rem;
`

const Rectangle = ({text="", children, ...rest}) => {
    return (
        <Wrap {...rest}>
            <Text type="small">{text}</Text>
            <Children>{children}</Children>
        </Wrap>
    )
}
export default Rectangle;