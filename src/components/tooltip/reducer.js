import React from 'react';

// Set up initial state object
const initialState = {
    isOpen: false,
    content: null,
    maxWidth: '7rem',
    maxHeight: '3rem',
    x: 0,
    y: 0,
    onClose: () => {},
};

function scheduleTooltip(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SCHEDULE_TOOLTIP_CONTENT':
            return {
                ...state,
                ...action.content,
            };
        case 'SET_SCHEDULE_TOOLTIP_IS_OPEN':
            return {
                ...state,
                ...{
                    isOpen: action.payload,
                },
            };
        case 'UPDATE_SCHEDULE_TOOLTIP':
            return {
                ...state,
                ...{ ...action.payload },
            };
        default:
            return state;
    }
}

export default scheduleTooltip;
