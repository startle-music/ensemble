import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import themeBase from './theme';

const GlobalStyle = createGlobalStyle`

    /** import MuseoSans-(100,300,500,700,900).woff */
    @font-face {
        font-family: 'MuseoSansReg';
        src: url('/fonts/MuseoSans-100.woff') format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'MuseoSansReg';
        src: url('/fonts/MuseoSans-300.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'MuseoSansReg';
        src: url('/fonts/MuseoSans-500.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'MuseoSansReg';
        src: url('/fonts/MuseoSans-700.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'MuseoSansReg';
        src: url('/fonts/MuseoSans-900.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }


    html, body {
        font-family: ${themeBase.main.font};
    }

    body {
        background: ${themeBase.main.background};

        &.tray-open{
            overflow: hidden;
        }
    }

    

    a {
        
    }

    h1 {
        color: ${themeBase.text.h1.color};
        font-size: ${themeBase.text.h1.fontSize};
        padding: ${themeBase.text.h1.padding};
        margin: ${themeBase.text.h1.margin};
    }
    h2 {
        color: ${themeBase.text.h2.color};
        font-size: ${themeBase.text.h2.fontSize};
        padding: ${themeBase.text.h2.padding};
        margin: ${themeBase.text.h2.margin};
    }
    h3 {
        color: ${themeBase.text.h3.color};
        font-size: ${themeBase.text.h3.fontSize};
        padding: ${themeBase.text.h3.padding};
        margin: ${themeBase.text.h3.margin};
    }
    h4 {
        color: ${themeBase.text.h4.color};
        font-size: ${themeBase.text.h4.fontSize};
        padding: ${themeBase.text.h4.padding};
        margin: ${themeBase.text.h4.margin};
    }
    h5 {
        color: ${themeBase.text.h5.color};
        font-size: ${themeBase.text.h5.fontSize};
        padding: ${themeBase.text.h5.padding};
        margin: ${themeBase.text.h5.margin};
    }
    h6 {
        color: ${themeBase.text.h6.color};
        font-size: ${themeBase.text.h6.fontSize};
        font-style: ${themeBase.text.h6.fontStyle};
        padding: ${themeBase.text.h6.padding};
        margin: ${themeBase.text.h6.margin};
    }

    p {
        color: ${themeBase.text.p.color};
        font-size: ${themeBase.text.p.fontSize};

        &.small {
            color: ${themeBase.text.p.small.color};
            font-size: ${themeBase.text.p.small.fontSize};
        }
    }

    label {
        user-select: none;
    }
    
    &::-webkit-scrollbar {
        width: 1rem;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar-thumb {
        border:  2px solid transparent;
        background-color: ${props => darken(0.2, props.theme.menu.background)};
        outline: 0;
    }

    /* Toastify */
    /* this has been very very reduced in size. If something is broken, recopy it from source and delete as needed */
    .Toastify__toast-container {
        z-index: 9999;
        -webkit-transform: translate3d(0, 0, 9999px);
        position: fixed;
        padding: 4px;
        width: 320px;
        box-sizing: border-box;
        color: #fff;
        top: 1em;
        right: 1em; 
    }
    @media only screen and (max-width: 480px) {
        .Toastify__toast-container {
            width: 100vw;
            padding: 0;
            left: 0;
            margin: 0; 
            top: 0; 
        }
        .Toastify__toast-container--rtl {
            right: 0;
            left: initial; 
        } 
    }

    .Toastify__toast {
        position: relative;
        min-height: 64px;
        box-sizing: border-box;
        margin-bottom: 1rem;
        padding: 8px;
        border-radius: 1px;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-height: 800px;
        overflow: hidden;
        font-family: sans-serif;
        cursor: pointer;
        direction: ltr; 
    }
    .Toastify__toast--rtl {
        direction: rtl; 
    }
    .Toastify__toast--default {
        background: #fff;
        color: #aaa; 
    }
    .Toastify__toast--info {
        background: #3498db; 
    }
    .Toastify__toast--success {
        background: #07bc0c; 
    }
    .Toastify__toast--warning {
        background: #f1c40f; 
    }
    .Toastify__toast--error {
        background: #e74c3c; 
    }
    .Toastify__toast-body {
        margin: auto 0;
        padding: 0rem 0.6rem 1rem;
        -ms-flex: 1;
            flex: 1; 
    }

    @media only screen and (max-width: 480px) {
        .Toastify__toast {
            margin-bottom: 0; 
        }
    }

    .Toastify__close-button {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        background: transparent;
        outline: none;
        border: none;
        padding: 0.6rem 0.6rem 0.6rem 0;
        cursor: pointer;
        opacity: 0.7;
        transition: 0.3s ease;
        -ms-flex-item-align: start;
            align-self: flex-start; 
    }
    .Toastify__close-button--default {
        color: #000;
        opacity: 0.3; 
    }
    .Toastify__close-button:hover, .Toastify__close-button:focus {
        opacity: 1; 
    }

    @keyframes Toastify__trackProgress {
        0% {
            transform: scaleX(1); 
        }
        100% {
            transform: scaleX(0); 
        } 
    }

    .Toastify__progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        z-index: 9999;
        opacity: 0.7;
        background-color: rgba(255, 255, 255, 0.7);
        transform-origin: left; 
    }
    .Toastify__progress-bar--animated {
        animation: Toastify__trackProgress linear 1 forwards; 
    }
    .Toastify__progress-bar--controlled {
        transition: transform .2s; 
    }
    .Toastify__progress-bar--rtl {
        right: 0;
        left: initial;
        transform-origin: right; 
    }
    .Toastify__progress-bar--rainbow {
        background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); 
    }
    .Toastify__progress-bar--default {
        background: #e7e7e7;  /* midGrey */
    }

    @keyframes Toastify__slideInRight {
    from {
        transform: translate3d(110%, 0, 0);
        visibility: visible; 
    }
    to {
        transform: translate3d(0, 0, 0); 
    } }

    @keyframes Toastify__slideInDown {
    from {
        transform: translate3d(0, -110%, 0);
        visibility: visible; 
    }
    to {
        transform: translate3d(0, 0, 0); 
    } }

    @keyframes Toastify__slideOutRight {
        from {
            transform: translate3d(0, 0, 0); 
        }
        to {
            visibility: hidden;
            transform: translate3d(110%, 0, 0); 
        }
    }

    @keyframes Toastify__slideOutUp {
        from {
            transform: translate3d(0, 0, 0); 
        }
        to {
            visibility: hidden;
            transform: translate3d(0, -500px, 0); 
        } 
    }

    .Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
        animation-name: Toastify__slideInRight; 
    }

    .Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
        animation-name: Toastify__slideOutRight; 
    }

`;

export const theme = themeBase;

export default GlobalStyle;
