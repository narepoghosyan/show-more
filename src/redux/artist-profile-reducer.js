import { artistProfileAPI } from "../api/api";
import image from "./../assets/images/artist-image.jpg";

const SET_ARTIST_PROFILE = 'SET-ARTIST-PROFILE'

let initialState = {
    id: null,
    name: null,
    country: null,
    birthday: null,
    image: null,
}

const artistProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ARTIST_PROFILE:
            let profile = action.profile
            return {
                ...state,
                id: profile.id,
                name: profile.name,
                country: profile.country ? profile.country.name : 'Not provided',
                birthday: profile.birthday,
                image: profile.image?  profile.image.original : image
            }
        default:
            return state;
    }
}

export const setArtistProfile = (profile) => ({type: SET_ARTIST_PROFILE, profile})

export const getProfileTC = (artistId) => async (dispatch) => {
    let data = await artistProfileAPI.getArtistProfile(artistId);
    dispatch(setArtistProfile(data));
}

export default artistProfileReducer;