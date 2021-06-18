import { connect } from "react-redux";
import { addCommentActionCreator } from "../../../redux/show-profile-reducer";
import {
  getComments,
  getNewCommentText,
} from "../../../redux/show-profile-selectors";
import CommentsWrapper from "./CommentsWrapper";

let mapStateToProps = (state) => {
  return {
    comments: getComments(state),
    newCommentText: getNewCommentText(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addCommentActionCreator(comment));
    },
  };
};

const CommentsWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsWrapper);

export default CommentsWrapperContainer;
