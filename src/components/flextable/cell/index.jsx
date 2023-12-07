import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    padding: 0.6rem 0.4rem;
`;

const Header = ({children, ...rest}) => {
    return (
        <Wrap {...rest}>{children}</Wrap>
    );
}

export default Header;
