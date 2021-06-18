import { showsAPI } from "../api/api";

const SET_SHOWS = "SET-SHOWS";
const UPDATE_SEARCH_TERM = "UPDATE-SEARCH-TERM";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const initialState = {
    shows: [],
    searchTerm: "",
    isFetching: false
}

const showsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SHOWS:
            return {
                ...state,
                shows: action.shows
            }

        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.searchTerm
            }
        case TOGGLE_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                }
        default: 
          return state;
    }
}

export const setShows = (shows) => ({type: SET_SHOWS, shows});
export const updateSearchTerm = (searchTerm) => ({type:UPDATE_SEARCH_TERM, searchTerm});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});

export const searchShowTC = (searchTerm) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await showsAPI.searchShow(searchTerm);
        dispatch(setShows(data));
        dispatch(toggleIsFetching(false));
    }
}

export default showsReducer;