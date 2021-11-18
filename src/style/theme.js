// import { lighten, opacify, darken } from 'polished';

import { lighten, opacify, darken } from 'polished';

const brandColors = {
    simplyRed: '#e83948',
    orangeCrush: '#f7823b',
    yellowSubmarine: '#f9bd45',
    fadeToGrey: '#b7c9db',
    mrBlueSky: '#b3d5e1',
    paintItBlack: '#1C2229',
    blueMonday: '#30a4c5',
    greenDay: '#7cc530',
    purpleRain: '#6033b9'
};

const responseBox = {
    default: {
        backgroundColor: '#E8E9EB',
        borderColor: '#9397A2'
    },
    success: {
        backgroundColor: '#EBF6E0',
        borderColor: '#9ED464'
    },
    danger: {
        backgroundColor: '#FBE1E3',
        borderColor: '#ED6C76'
    },
    warning: {
        backgroundColor: '#FEF4E2',
        borderColor: '#FACD74'
    },
    info: {
        backgroundColor: '#DFF1F6',
        borderColor: '#7BC5DA'
    }
};

const generalColors = {
    lightGrey: '#eef0f4',
    lightBlueGrey: '#787e89',
    midGrey: '#e7e7e7',
    blueGrey: '#6a707d',
    darkGrey: '#696f7c' /* nice */,
    white: '#ffffff',
    green: '#7ec17e',
    sliverColor: 'rgb(199,55,71)',
    sliverGradient:
        'linear-gradient(90deg, rgba(199,55,71,1) 0%, rgba(223,172,51,1) 20%, rgba(142,182,59,1) 40%, rgba(251,253,254,1) 60%, rgba(102,175,208,1) 80%, rgba(63,83,158,1) 100%)'
};

const appColors = {
    background: generalColors.midGrey,
    color: brandColors.paintItBlack,
    boxBackground: generalColors.white,
    menu: {
        background: generalColors.white,
        color: generalColors.blueGrey,
        title: brandColors.fadeToGrey,

        expanded: {
            background: generalColors.lightGrey,
            color: generalColors.lightBlueGrey
        }
    },
    products: {
        music: {
            primary: brandColors.simplyRed,
            contrast: generalColors.white,
            button: brandColors.blueMonday,
            buttonColor: generalColors.white
        },
        interactive: {
            primary: brandColors.orangeCrush,
            contrast: generalColors.white,
            button: brandColors.purpleRain,
            buttonColor: generalColors.white
        },
        display: {
            primary: brandColors.blueMonday,
            contrast: generalColors.white,
            button: brandColors.yellowSubmarine,
            buttonColor: generalColors.white
        },
        messaging: {
            primary: brandColors.greenDay,
            contrast: generalColors.white,
            button: brandColors.orangeCrush,
            buttonColor: generalColors.white
        },
        rrb: {
            primary: brandColors.purpleRain,
            contrast: generalColors.white,
            button: brandColors.yellowSubmarine,
            buttonColor: generalColors.white
        },
        allWhite: {
            primary: generalColors.white,
            contrast: generalColors.white,
            button: generalColors.white,
            buttonColor: generalColors.white
        },
        grey: {
            primary: brandColors.fadeToGrey,
            contrast: brandColors.paintItBlack,
            button: brandColors.fadeToGrey,
            buttonColor: brandColors.paintItBlack
        },
        positive: {
            primary: brandColors.fadeToGrey,
            contrast: generalColors.white,
            button: brandColors.greenDay,
            buttonColor: generalColors.white
        },
        neutral: {
            primary: brandColors.fadeToGrey,
            contrast: generalColors.white,
            button: brandColors.blueMonday,
            buttonColor: generalColors.white
        },
        negative: {
            primary: brandColors.fadeToGrey,
            contrast: generalColors.white,
            button: brandColors.simplyRed,
            buttonColor: generalColors.white
        },
        text: {
            primary: brandColors.fadeToGrey,
            contrast: brandColors.simplyRed,
            button: generalColors.white,
            buttonColor: brandColors.simplyRed
        },
        default: {
            primary: brandColors.paintItBlack,
            contrast: generalColors.white,
            button: brandColors.blueMonday,
            buttonColor: generalColors.white
        },
        get() {
            return appColors.products.default;
        }
    }
};

/**
 * App Theme
 * This default app theme takes the colour scheme and general settings above.
 *
 * NOTE:
 * If further themes are made, they should follow the below format to ensure
 * the theme working with all existing components.
 * To alter the theme in a minor way, try updating above this section only.
 */
const theme = {
    colors: {
        simplyRed: '#e83948',
        orangeCrush: '#f7823b',
        yellowSubmarine: '#f9bd45',
        fadeToGrey: '#b7c9db',
        mrBlueSky: '#b3d5e1',
        paintItBlack: '#1C2229',
        blueMonday: '#30a4c5',
        greenDay: '#7cc530',
        purpleRain: '#6033b9',
    },
    mainColors: brandColors,
    generalColors,
    boxColors: responseBox,
    layout: {
        spacing: 1.6
    },
    main: {
        background: appColors.background,
        font: 'MuseoSansReg, sans-serif',
        borderRadius: '0.45rem',
        color: appColors.color,
        bodyColor: generalColors.lightBlueGrey,
        contrastColor: generalColors.white,
        fontSize: '16px',
        boxBackground: appColors.boxBackground
    },
    menu: { ...appColors.menu },
    text: {
        h1: {
            color: generalColors.white,
            fontSize: '3rem',
            padding: '1rem 0',
            margin: '0'
        },
        h2: {
            color: appColors.color,
            fontSize: '1.5rem',
            padding: '1rem 0',
            margin: '0'
        },
        h3: {
            color: appColors.color,
            fontSize: '1.125rem',
            padding: '0.785rem 0',
            margin: '0'
        },
        h4: {
            color: appColors.color,
            fontSize: '1rem',
            padding: '0.75rem 0',
            margin: '0'
        },
        h5: {
            color: appColors.color,
            fontSize: '0.875rem',
            padding: '0',
            margin: '0'
        },
        h6: {
            color: appColors.color,
            fontSize: '0.875rem',
            fontStyle: 'italic',
            padding: '0',
            margin: '0'
        },
        p: {
            color: appColors.color,
            fontSize: '1rem',
            small: {
                color: appColors.color,
                fontSize: '0.875rem'
            }
        },
        input: {
            color: appColors.color,
            placeholder: darken(0.12, generalColors.midGrey),
            fontSize: '1rem',
            small: {
                color: appColors.color,
                fontSize: '0.875rem'
            }
        },
        label: {
            color: appColors.color,
            fontSize: '1rem',
            small: {
                color: appColors.color,
                fontSize: '0.875rem'
            }
        },
        help: {
            color: appColors.color,
            fontSize: '1rem',
            small: {
                color: appColors.color,
                fontSize: '0.75rem'
            }
        }
    },
    products: appColors.products,
    feedback: appColors.feedback,
    buttons: { ...appColors.buttons },
    containers: {},
    mast: {},
    primaryNav: {},
    selectionPanel: {
        background: generalColors.lightGrey,
        color: appColors.products.default.primary,
        active: {
            background: appColors.products.default.primary,
            color: generalColors.white
        }
    },
    nowPlaying: {
        artistColor: generalColors.blueGrey,
        loaderColor: brandColors.simplyRed,
        volumeMain: brandColors.simplyRed,
        volumeBg: brandColors.fadeToGrey
    },
    rowComponent: {
        actionShadow: generalColors.lightBlueGrey
    },
    pagination: {
        color: generalColors.lightBlueGrey
    },
    toast: {
        background: generalColors.white,
        color: generalColors.lightBlueGrey,
        highlight: {
            success: brandColors.greenDay,
            danger: brandColors.simplyRed,
            warning: brandColors.yellowSubmarine,
            default: generalColors.lightBlueGrey,
            information: brandColors.blueMonday
        }
    },
    dashboard: {
        online: brandColors.greenDay,
        offline: brandColors.simplyRed,
        fetching: generalColors.lightBlueGrey
    }
};

export const absoluteFill = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};

export default theme;


export default theme;
