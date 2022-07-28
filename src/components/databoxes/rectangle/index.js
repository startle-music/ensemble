import React, { Component } from 'react';
import styled from 'styled-components';
import Text from '../../text';

const Wrap = styled.div`
    padding:.75rem;
    border-radius:10px;
`

const Children = styled.div`
    margin-top:.25rem;
`

const Rectangle = ({text="",children}) => {
    return <Wrap><Text type="small">{text}</Text><Children>{children}</Children></Wrap>
}
export default Rectangle;