import React from 'react';
import styled from 'styled-components';
import theme from '../../../style/theme';

const Wrap = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${theme.generalColors.midGrey};

    > * {
        font-weight: 700;
    }
`;

const Header = ({children}) => {
    return (
        <Wrap>{children}</Wrap>
    );
}

export default Header;
