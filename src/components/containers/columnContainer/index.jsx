import React from 'react'
import styled,{css} from 'styled-components'

export const ColumnContainerBase = css`
    display:flex;
    width: 100%;
    background: ${props => props.theme.containers.background};
    flex-direction: column;
    flex: ${props => props.size || 1};
    justify-content: center;
    ${props => props.image 
        ? `
            height: 100%;
            background-image: url(${props.image});
            background-size: ${props.imageSize || "cover"};
            background-repeat: no-repeat; 
            background-position: ${props.imagePos || "center center"} ;
        `
        : ` `
    }
    
    @media(max-width:500px){
        flex-direction: column;    
        ${props => props.mobile === false 
            ? `
                display:none;
            `
            : ``}
    }
`

const ColumnContainer = styled.div`
    ${ColumnContainerBase}
`

export default ColumnContainer