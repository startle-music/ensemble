const initialState = {};

export const progressBars = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROGRESS_BAR':
            return {
                ...state,
                [action.key]: 0,
            };
        case 'UPDATE_PROGRESS_BAR':
            return {
                ...state,
                ...action.data,
            };
        case 'DELETE_PROGRESS_BAR':
            const copyState = { ...state };
            delete copyState[action.key];
            return {
                ...copyState,
            };
        default:
            return { ...state };
    }
};
