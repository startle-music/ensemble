import React from 'react';

import styled from 'styled-components';

const ToggleAreaStyled = styled.div`
    display: ${props => (props.passthrough ? 'contents' : 'block')};
`;

export default function ToggleArea({ check, value, passThrough, children }) {
    return check === value ? <ToggleAreaStyled passthrough={passThrough}>{children}</ToggleAreaStyled> : null;
}
