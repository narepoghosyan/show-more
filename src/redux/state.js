import showProfileReducer from "./show-profile-reducer";

const store = {
  _state: {
    showProfilePage: {
        description: {
            id: 1,
            image:
              "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
            name: "Bitten",
            language: "English",
            genres: ["Drama", "Thriller"],
            runtime: 60,
            rating: 6.6,
            summary:
              "Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels",
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
          newCommentText: ''
    },
    showsPage: {

    },
    artistProfilePage: {
        id: 1,
        name: 'Mike Vogel',
        country: "United States",
        birthday: "1979-07-17",
        image: "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
    }
  },

  _callSubscriber(){
    console.log('state changed');
  },

  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.showProfilePage = showProfileReducer(this._state.showProfilePage, action)
    this._callSubscriber(this._state);
  }
}

export default store;