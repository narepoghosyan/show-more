import showProfileReducer, { addCommentActionCreator, deleteCommentActionCreator } from "./show-profile-reducer"

let state = {
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

it("Posts' number should be incremented", () => {
    let action = addCommentActionCreator("New comment");

    let changedState = showProfileReducer(state, action);

    expect(changedState.comments.length).toBe(3);
})

it("Post's text should be correct", () => {
    let action = addCommentActionCreator("New comment");

    let changedState = showProfileReducer(state, action);

    expect(changedState.comments[2].text).toBe("New comment");
})

it("Posts' number should be decremented", () => {
    let action = deleteCommentActionCreator(1);

    let changedState = showProfileReducer(state, action);

    expect(changedState.comments.length).toBe(1);
})

it("Posts' number should not be decremented if id is not correct", () => {
    let action = deleteCommentActionCreator(12);

    let changedState = showProfileReducer(state, action);

    expect(changedState.comments.length).toBe(2);
})