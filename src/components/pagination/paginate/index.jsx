function paginate(totalItems, currentPage, pageSize, maxPages) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    let thisPage = currentPage;

    // ensure current page isn't out of range
    if (currentPage <= 1) {
        thisPage = 1;
    } else if (currentPage > totalPages) {
        thisPage = totalPages;
    }

    let startPage = 0;
    let endPage = 0;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (thisPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (thisPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = thisPage - maxPagesBeforeCurrentPage;
            endPage = thisPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    const startIndex = (thisPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems,
        thisPage,
        pageSize,
        totalPages,
        startPage,
        endPage,
        startIndex,
        endIndex,
        pages
    };
}

export default paginate;
