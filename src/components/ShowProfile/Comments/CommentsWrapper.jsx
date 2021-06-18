import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";

const CommentsWrapper = (props) => {
  let addComment = (formData) => {
    console.log(formData);
    props.addComment(formData.comment);
  };

  return (
    <Box marginTop="20px">
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      <CommentsForm onSubmit={addComment} />
      <Comments comments={props.comments} />
    </Box>
  );
};

export default CommentsWrapper;
