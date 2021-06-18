import { showProfileAPI } from '../api/api';
import logo from './../assets/images/show-logo.png';

const ADD_COMMENT = 'ADD-COMMENT';
const DELETE_COMMENT = 'DELETE-COMMENT';
const SET_CAST = 'SET-CAST';
const SET_SHOW_DESCRIPTION = 'SET-SHOW-DESCRIPTION'

let initialState = {
  description: {
      id: null,
      image: null,
      name: null,
      language: null,
      genres: [],
      runtime: null,
      rating: null,
      summary: null,
      cast: []
    },
    
  comments: [
    {
      id: 1,
      text: "Comment 1",
      date: "20:23 2/3/2020"
    },
    {
      id: 2,
      text: "Comment 2",
      date: "14:25 23/5/2020"
    },
  ],
}

const showProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_COMMENT:
          let date = new Date();
          let commentDate = date.getHours() + ":" + date.getMinutes() + " " + date.getDate() + "/" + date.getMonth() + "/" 
          + date.getFullYear();

          let comment = {
            id: state.comments.length + 1,
            text: action.comment,
            date: commentDate
          }

          return {
            ...state,
            comments: [...state.comments, comment],
            newCommentText: ''
          }
        case SET_CAST:
          let cast = action.cast.map((item) => {
              return {
                id: item.person.id,
                name: item.person.name,
              }
          })

          return {
            ...state,
            description: {...state.description, cast: cast}
          }
        case SET_SHOW_DESCRIPTION:
          let description = action.description
          return {
            ...state,
            description: {
              ...state.description,
              id: description.id,
              image: description.image ? description.image.original : logo,
              name: description.name,
              language: description.language,
              genres: [...description.genres],
              runtime: description.runtime,
              rating: description.rating.average,
              summary: description.summary,
                    }
          }
        case DELETE_COMMENT:
          return {
            ...state,
            comments: state.comments.filter(c => c.id != action.id)
          }
        default: 
          return state;
    }
}


export const addCommentActionCreator = (comment) => ({ type: ADD_COMMENT, comment });
export const deleteCommentActionCreator = (id) => ({ type: DELETE_COMMENT, id });
export const setCastAC = (cast) => ({ type: SET_CAST, cast })
export const setShowDescriptionAC = (description) => ({type: SET_SHOW_DESCRIPTION, description})

export const getProfile = (showId) => {
  return async (dispatch) => {
    let descriptionData = await showProfileAPI.getDescription(showId);
    dispatch(setShowDescriptionAC(descriptionData));

    let castData = await showProfileAPI.getCast(showId);
    dispatch(setCastAC(castData));
  }
}

export default showProfileReducer;