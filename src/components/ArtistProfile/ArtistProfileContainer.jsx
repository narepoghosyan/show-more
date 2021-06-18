import React from "react";
import { connect } from "react-redux";
import ArtistProfile from "./ArtistProfile";
import { withRouter } from "react-router";
import { getProfileTC } from "../../redux/artist-profile-reducer";
import { compose } from "redux";
import Preloader from "../common/Preloader";
import { getProfile } from "./../../redux/artist-profile-selectors";

let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
  };
};

class ArtistProfileContainer extends React.Component {
  componentDidMount() {
    let artistId = this.props.match.params.artistId;

    if (!artistId) {
      artistId = 1;
    }

    this.props.getProfileTC(artistId);
  }

  render() {
    let artistId = +this.props.match.params.artistId;

    return this.props.profile.id === artistId ||
      (!artistId && this.props.profile.id === 1) ? (
      <ArtistProfile {...this.props} />
    ) : (
      <Preloader />
    );
  }
}

export default compose(
  connect(mapStateToProps, { getProfileTC }),
  withRouter
)(ArtistProfileContainer);
