import React from 'react';
import styled, {css} from 'styled-components';
//import theme from '../../style/theme';

const Wrap = styled.div`
    display: block;

    border-radius:10px;
    background-color:#fff;
    
    > * {
        display: flex;

        ${({columnString}) => columnString !== null ? "> * { width:" + columnString + "; }" : null }

        ${({columnArray}) => columnArray !== null ? columnArray.map((columnString, indx) => "> *:nth-child("+(indx+1)+") { width:" + columnString + "; }") : null }

        

    }
    //grid-template-rows: ${({rows}) => rows};
`;

//grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
//grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

const getColumnString = (columns) => {

    console.log('getcolumnstring', typeof(columns));

    if(typeof(columns) === 'string') {
        //return columns;
        return css`
            * > {
                width: ${columns};
            }        
`;
    }
}

const Header = ({children, columns = '12rem'}) => {

    return (
        <Wrap columnString={typeof(columns) === 'string' ? columns : null} columnArray={typeof(columns) !== 'string' ? columns : null}>
            { children }
        </Wrap>
    );
}

export default Header;
