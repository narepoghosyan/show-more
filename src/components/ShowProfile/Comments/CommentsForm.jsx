import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls";

const maxLength100 = maxLengthCreator(100);

const CommentsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item>
          <Field
            component={Textarea}
            multiline
            placeholder="Type a comment"
            name="comment"
            rows={4}
            validate={[required, maxLength100]}
          ></Field>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Post
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

let CommentsReduxForm = reduxForm({
  form: "comments",
})(CommentsForm);

export default CommentsReduxForm;
