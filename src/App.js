import React from 'react';
import './App.css';
import {Grid, makeStyles} from '@material-ui/core';
import Sidebar from './components/Sidebar';
import { Route } from 'react-router-dom';
import ShowsContainer from './components/Shows/ShowsContainer';
import withSuspense from './hocs/withSuspense';
let ArtistProfileContainer = React.lazy(() => import('./components/ArtistProfile/ArtistProfileContainer'));
let ShowProfileContainer = React.lazy(() => import('./components/ShowProfile/ShowProfileContainer'))

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh"
  }
}));

function App(props) {
  const classes = useStyles();
  return (
      <Grid container spacing={0} alignItems="stretch" className={classes.container}>
        <Grid item xs={2} className="sidebar">
            <Sidebar/>
        </Grid>
        <Grid item xs={10}>
          <Route path="/show-profile/:showId?" render={withSuspense(ShowProfileContainer)}/>
          <Route path="/shows" render={() => <ShowsContainer/>}/>
          <Route path="/artist-profile/:artistId?" render={withSuspense(ArtistProfileContainer)}/>
        </Grid>
      </Grid>
  );
}

export default App;
