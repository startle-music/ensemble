import React from 'react';
import styled, {css} from 'styled-components';

const Wrap = styled.div`
    padding: 0.6rem 0.4rem;
`;

const headingBase = css`
    //color: ${(props) => props.theme.main.color };
    //font-family: ${(props) => props.theme.main.font };
    margin: 0;
`;

const SmallTableHeader = styled.h4`
    ${headingBase}
    font-weight: 700;
    font-size: 0.95rem;
    //color: ${(props) => props.theme.main.color };
`;

const Header = ({type, children}) => {

    switch(type){
        case "smalltableheader":
            return (<Wrap><SmallTableHeader>{children}</SmallTableHeader></Wrap>);

        default:
            return (
                <Wrap>{children}</Wrap>
            ); 
    }
}

export default Header;
