import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "70px",
  },

  active: {
    color: "#fbeec1",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div>
      <img
        className={classes.img}
        src="https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png"
        alt="Logo"
      />

      <List>
        <ListItem
          button
          component={NavLink}
          to="/shows"
          activeClassName={classes.active}
        >
          <ListItemText primary="Shows" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/show-profile"
          activeClassName={classes.active}
        >
          <ListItemText primary="Show Profile" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/artist-profile"
          activeClassName={classes.active}
        >
          <ListItemText primary="Artist profile" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
