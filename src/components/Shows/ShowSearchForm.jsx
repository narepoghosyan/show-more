import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

const ShowSearchForm = (props) => {
  return (
    <form>
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item>
          <TextField
            placeholder="Search a show"
            value={props.searchTerm}
            onChange={props.onTermChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={props.searchShow}>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShowSearchForm;
