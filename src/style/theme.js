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

const statusColours = {
    default: {
        backgroundColor: '#E8E9EB',
        borderColor: '#9397A2',
        textColor: '#1C2229'
    },
    success: {
        backgroundColor: '#EBF6E0',
        borderColor: '#9ED464',
        textColor: '#7CC530'
    },
    danger: {
        backgroundColor: '#FBE1E3',
        borderColor: '#ED6C76',
        textColor: '#E83948'
    },
    warning: {
        backgroundColor: '#FEF4E2',
        borderColor: '#FACD74',
        textColor: '#F7823B'
    },
    info: {
        backgroundColor: '#DFF1F6',
        borderColor: '#7BC5DA',
        textColor: '#30A4C5'
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
    main: {
        spacing: 1.6,
        background: generalColors.midGrey,
        font: 'MuseoSansReg, sans-serif',
        borderRadius: '0.45rem',
        color: brandColors.paintItBlack,
        bodyColor: generalColors.lightBlueGrey,
        contrastColor: generalColors.white,
        fontSize: '16px',
        boxBackground: generalColors.white
    },

    // styling for each component
    background: {
        background: brandColors.paintItBlack
    },
    form: {
        input: {
            background: generalColors.lightGrey,
            color: brandColors.paintItBlack,
            placeholder: darken(0.12, generalColors.midGrey),
            fontSize: '1rem',
            small: {
                color: brandColors.paintItBlack,
                fontSize: '0.875rem'
            }
        },
        label: {
            color: brandColors.paintItBlack,
            fontSize: '1rem',
            small: {
                color: brandColors.paintItBlack,
                fontSize: '0.875rem'
            }
        }
    },
    text: {
        h1: {
            color: generalColors.white,
            fontSize: '3rem',
            padding: '1rem 0',
            margin: '0'
        },
        h2: {
            color: brandColors.paintItBlack,
            fontSize: '1.5rem',
            padding: '1rem 0',
            margin: '0'
        },
        h3: {
            color: brandColors.paintItBlack,
            fontSize: '1.125rem',
            padding: '0.785rem 0',
            margin: '0'
        },
        h4: {
            color: brandColors.paintItBlack,
            fontSize: '1rem',
            padding: '0.75rem 0',
            margin: '0'
        },
        h5: {
            color: brandColors.paintItBlack,
            fontSize: '0.875rem',
            padding: '0',
            margin: '0'
        },
        h6: {
            color: brandColors.paintItBlack,
            fontSize: '0.875rem',
            fontStyle: 'italic',
            padding: '0',
            margin: '0'
        },
        p: {
            color: brandColors.paintItBlack,
            fontSize: '1rem',
            small: {
                color: brandColors.paintItBlack,
                fontSize: '0.875rem'
            }
        },
    },
    selectionPanel: {
        background: generalColors.lightGrey,
        color: brandColors.blueMonday,
        active: {
            background: brandColors.blueMonday,
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
    },
    button: { 
        background: brandColors.paintItBlack,
        color: generalColors.white,
        border: `2px solid ${brandColors.paintItBlack}`,
        hover: {    
            background: brandColors.paintItBlack,
            color: generalColors.white,
            border: `2px solid ${brandColors.paintItBlack}`
        },
        active: {
            background: brandColors.paintItBlack,
            color: generalColors.white,
            border: `2px solid ${brandColors.paintItBlack}`,
            hover: {
                background: brandColors.paintItBlack,
                color: generalColors.white,
                border: `2px solid ${brandColors.paintItBlack}`
            }
        }
    },
    tabs: {
        color: brandColors.fadeToGrey,

        tab: {
            color: brandColors.paintItBlack,
            active: brandColors.simplyRed,
            border: `3px solid ${brandColors.simplyRed}`
        }
    }
};

export const absoluteFill = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};

export default theme;

export const simplyRed = {...theme, ...{

    button: { 
        background: brandColors.simplyRed,
        color: generalColors.white,
        border: `2px solid ${brandColors.simplyRed}`,
        hover: {    
            background: brandColors.simplyRed,
            color: generalColors.white,
            border: `2px solid ${brandColors.simplyRed}`
        },
        active: {
            background: brandColors.simplyRed,
            color: generalColors.white,
            border: `2px solid ${brandColors.simplyRed}`,
            hover: {
                background: brandColors.simplyRed,
                color: generalColors.white,
                border: `2px solid ${brandColors.simplyRed}`
            }
        }
    },
    form: {
        input: {
            background: brandColors.simplyRed,
            color: generalColors.white,
        }
    }
}};

export const mrBlueSky = {...theme, ...{

    button: { 
        background: brandColors.mrBlueSky,
        color: generalColors.white,
        border: `2px solid ${brandColors.mrBlueSky}`,
        hover: {    
            background: brandColors.mrBlueSky,
            color: generalColors.white,
            border: `2px solid ${brandColors.mrBlueSky}`
        },
        active: {
            background: brandColors.mrBlueSky,
            color: generalColors.white,
            border: `2px solid ${brandColors.mrBlueSky}`,
            hover: {
                background: brandColors.mrBlueSky,
                color: generalColors.white,
                border: `2px solid ${brandColors.mrBlueSky}`
            }
        }
    }
}};

export const greenDay = {...theme, ...{

    button: { 
        background: brandColors.greenDay,
        color: generalColors.white,
        border: `2px solid ${brandColors.greenDay}`,
        hover: {    
            background: brandColors.greenDay,
            color: generalColors.white,
            border: `2px solid ${brandColors.greenDay}`
        },
        active: {
            background: brandColors.greenDay,
            color: generalColors.white,
            border: `2px solid ${brandColors.greenDay}`,
            hover: {
                background: brandColors.greenDay,
                color: generalColors.white,
                border: `2px solid ${brandColors.greenDay}`
            }
        }
    }
}};

