import { Grid } from "@material-ui/core";

const Image = (props) => {
  return (
    <Grid item xs={3}>
      <img width="350px" src={props.image} alt="Artist" />
    </Grid>
  );
};

export default Image;
