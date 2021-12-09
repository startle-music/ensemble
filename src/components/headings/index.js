import styled, {css} from 'styled-components'
import theme from '../../style/theme';

export const headingBase = css`
    color: ${theme.main.color};
    font-family: ${theme.main.font};
    margin: 0;
`

const Hero = styled.h3`
    ${headingBase}
    font-size: 2.2rem;
`;

const Title = styled.h1`
    ${headingBase}
    font-size: 1.6rem;
`;

const Subtitle = styled.h2`
    ${headingBase}
    font-weight: lighter;
    font-size: 1.4rem;
`;
const Standard = styled.h4`
    ${headingBase}
    font-size: 1.2rem;
`;

const Heading = ({type='heading', children, ...rest}) => {
    
    switch(type.toLowerCase()) {

        case 'hero': 
            return <Hero {...rest}>{children}</Hero>

        case 'title': 
            return <Title {...rest}>{children}</Title>

        case 'subtitle': 
            return <Subtitle {...rest}>{children}</Subtitle>

        case 'heading':
        default:
            return <Standard {...rest}>{children}</Standard>

    }
    
    
}

export default Heading