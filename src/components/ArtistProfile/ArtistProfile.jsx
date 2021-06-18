import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Image from "./Image";
import Description from "./Description";

const ArtistProfile = (props) => {
  let { name, image, country, birthday } = props.profile;

  return (
    <Box p="20px">
      <Typography variant="h4" gutterBottom>
        <i>{name}</i>
      </Typography>
      <Grid container spacing={0} alignItems="stretch">
        <Image image={image} />
        <Description country={country} birthday={birthday} />
      </Grid>
    </Box>
  );
};

export default ArtistProfile;
