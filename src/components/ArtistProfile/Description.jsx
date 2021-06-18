import DescriptionItem from "../common/DescriptionItem";
import { Grid } from "@material-ui/core";

const Description = ({ country, birthday }) => {
  return (
    <Grid item xs={9}>
      <DescriptionItem descriptionKey="Country" descriptionValue={country} />
      <DescriptionItem descriptionKey="Birthday" descriptionValue={birthday} />
    </Grid>
  );
};

export default Description;
