export const getShows = (state) => {
    return state.showsPage.shows;
}

export const getSearchTerm = (state) => {
    return state.showsPage.searchTerm
}

export const getIsFetching = (state) => {
    return state.showsPage.isFetching
}