function setUpdateContent(content) {
    return { type: 'UPDATE_SCHEDULE_TOOLTIP_CONTENT', content };
}

export function updateContent(content) {
    return function (dispatch) {
        return dispatch(setUpdateContent(content));
    };
}

export function setTooltipIsOpen(payload) {
    return { type: 'SET_SCHEDULE_TOOLTIP_IS_OPEN', payload };
}

export function updateToolTip(payload) {
    return { type: 'UPDATE_SCHEDULE_TOOLTIP', payload };
}
