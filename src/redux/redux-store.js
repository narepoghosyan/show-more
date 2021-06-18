import { applyMiddleware, combineReducers, createStore } from 'redux';
import artistProfileReducer from './artist-profile-reducer';
import showProfileReducer from './show-profile-reducer';
import showsReducer from './shows-reducer';
import reduxThunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    showProfilePage: showProfileReducer,
    showsPage: showsReducer,
    artistProfilePage: artistProfileReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(reduxThunk))

export default store;