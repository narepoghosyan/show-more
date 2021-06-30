import { artistProfileAPI } from './../api/api';
import {getProfileTC, setArtistProfile} from './artist-profile-reducer';

test('get artist profile thunk', async () => {
    const data = {
        id: 1,
        name: 'Nare',
        country: 'Armenia',
        birthday: '23.02.1993',
        image: 'nare.jpg'
    }
    
    jest.spyOn(artistProfileAPI, 'getArtistProfile').mockImplementation(jest.fn(() => data))

    const dispatch = jest.fn();

    await getProfileTC(1)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setArtistProfile(data));
})