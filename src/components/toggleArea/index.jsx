import react from 'react';

import styled from 'styled-components';

const ToggleAreaStyled = styled.div``;

export default function ToggleArea({ check, value, children }) {
    return check === value ? <ToggleAreaStyled>{children}</ToggleAreaStyled> : null;
}
