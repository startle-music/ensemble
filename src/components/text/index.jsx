import React from 'react';
import styled, {css} from 'styled-components'

export const TextBase = css`
    font-family: ${(props) => props.theme.main.font};
    font-weight: lighter;
    margin: 0;
`


const Help = styled.p`
    ${TextBase}
    font-size: 0.8rem;
`;

const Small = styled.p`
    ${TextBase}
    font-weight: lighter;
    font-size: 0.95rem;
    color: ${(props) => props.theme.main.color};
`;

const Paragraph = styled.p`
    ${TextBase}
    font-size: 1rem;
`;

const Text = ({type='heading', children, ...rest}) => {
    
    switch(type.toLowerCase()) {

        case 'help': 
            return <Help {...rest}>{children}</Help>

        case 'small': 
            return <Small {...rest}>{children}</Small>

        default:
            return <Paragraph {...rest}>{children}</Paragraph>

    }
    
    
}

export default Text