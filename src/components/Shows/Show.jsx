import { Grid, Typography, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Show = ({ id, photoUrl, name, summary }) => {
  return (
    <Box mt="30px">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavLink to={"/show-profile/" + id}>
            <img src={photoUrl} width="210px" alt={"Show" + id} />
          </NavLink>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" gutterBottom>
            <i>{name}</i>
          </Typography>
          <p>{summary}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Show;
