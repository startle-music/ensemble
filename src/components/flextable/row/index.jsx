import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${(props) => props.theme.main.color};
`;

const Header = ({children}) => {
    return (
        <Wrap>{children}</Wrap>
    );
}

export default Header;
