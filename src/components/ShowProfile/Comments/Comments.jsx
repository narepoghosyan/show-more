const Comments = (props) => {
  return (
    <div>
      {props.comments.map((comment) => {
        return (
          <p key={comment.id}>
            <i>{comment.text}</i> ({comment.date})
          </p>
        );
      })}
    </div>
  );
};

export default Comments;
