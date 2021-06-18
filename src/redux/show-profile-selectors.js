import { createSelector } from 'reselect';

export const getDescription = (state) => {
    return state.showProfilePage.description;
}

const getCommentsSelector = (state) => {
    return state.showProfilePage.comments;
}

export const getComments = createSelector(getCommentsSelector, (state) => {
    return state.filter((item) => {return true});
})

export const getNewCommentText = (state) => {
    return state.showProfilePage.newCommentText;
}