import { Grid } from "@material-ui/core";

const ShowImage = (props) => {
  return (
    <Grid item xs={3}>
      <img width="350px" src={props.image} alt="Show" />
    </Grid>
  );
};

export default ShowImage;
