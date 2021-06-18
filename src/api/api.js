import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.tvmaze.com/"
})

export const artistProfileAPI = {
    getArtistProfile: (artistId) => {
        return instance.get(`people/${artistId}`).then((response) => {
            return response.data
        })
    }
}

export const showsAPI = {
    searchShow: (searchTerm) => {
        return instance.get(`search/shows?q=${searchTerm}`).then(response => response.data)
    }
}

export const showProfileAPI = {
    getDescription: (showId) => {
       return instance.get(`shows/${showId}`).then(response => response.data)
    },
    getCast: (showId) => {
        return instance.get(`shows/${showId}/cast`).then(response => response.data)
    }
}