export function createProgressBar(key) {
    return { type: 'CREATE_PROGRESS_BAR', key };
}

export function updateProgressBar(data) {
    return { type: 'UPDATE_PROGRESS_BAR', data };
}

export function readProgressBar(key) {
    return { type: 'READ_PROGRESS_BAR', key };
}

export function readAllProgressBars() {
    return { type: 'READ_PROGRESS_BAR' };
}

export function deleteProgressBar(key) {
    return { type: 'DELETE_PROGRESS_BAR', key };
}
