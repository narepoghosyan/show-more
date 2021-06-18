import DescriptionItem from "../../common/DescriptionItem";
import { Grid } from "@material-ui/core";
import Cast from "./Cast";
import Summary from "./Summary";

const Description = (props) => {
  let { language, genres, runtime, rating, summary, cast } = props.profile;

  return (
    <Grid item xs={9}>
      <DescriptionItem descriptionKey="Language" descriptionValue={language} />
      <DescriptionItem
        descriptionKey="Genres"
        descriptionValue={genres.join(" | ")}
      />
      <DescriptionItem descriptionKey="Runtime" descriptionValue={runtime} />
      <DescriptionItem descriptionKey="Rating" descriptionValue={rating} />
      <Summary summary={summary} />
      <Cast cast={cast} />
    </Grid>
  );
};

export default Description;
