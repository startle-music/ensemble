import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import themeBase from './theme';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "MuseoSansLight";
        src: url("/fonts/MuseoSans-300.woff") format("woff");
    }

    @font-face {
        font-family: "MuseoSansReg";
        src: url("/fonts/MuseoSans-500.woff") format("woff");
    }

    @font-face {
        font-family: "MuseoSansBold";
        src: url("/fonts/MuseoSans-900.woff") format("woff");
    }


    html, body {
        
    }


`;

export const theme = themeBase;

export default GlobalStyle;
