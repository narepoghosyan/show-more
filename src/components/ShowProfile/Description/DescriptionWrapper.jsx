import { Grid, Typography } from "@material-ui/core";
import Description from "./Description";
import Image from "./Image";

const DescriptionWrapper = (props) => {
  let description = props.description;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        <i>{description.name}</i>
      </Typography>
      <Grid container spacing={0} alignItems="stretch">
        <Image image={description.image} />
        <Description profile={description} setCast={props.setCast} />
      </Grid>
    </div>
  );
};

export default DescriptionWrapper;
