import React from 'react';
import styled, {css} from 'styled-components';
import theme from '../../../style/theme';

const Wrap = styled.div`
    padding: 0.6rem 0.4rem;
`;

const headingBase = css`
    color: ${theme.main.color};
    font-family: ${theme.main.font};
    margin: 0;
`

const SmallTableHeader = styled.h4`
    ${headingBase}
    font-weight: 700;
    font-size: 0.95rem;
    color:${()=>theme.generalColors.darkGrey}
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
