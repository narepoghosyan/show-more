import React from "react";
import { connect } from "react-redux";
import { getProfile } from "../../redux/show-profile-reducer.js";
import { withRouter } from "react-router";
import { compose } from "redux";
import Preloader from "../common/Preloader.jsx";
import ShowProfile from "./ShowProfile.jsx";
import { getDescription } from "../../redux/show-profile-selectors.js";

class ShowProfileContainer extends React.Component {
  componentDidMount() {
    let showId = this.props.match.params.showId;

    if (!showId) {
      showId = 1;
    }

    this.props.getProfile(showId);
  }

  render() {
    let showId = this.props.match.params.showId;

    return this.props.description.id == showId ||
      (!showId && this.props.description.id === 1) ? (
      <ShowProfile description={this.props.description} />
    ) : (
      <Preloader />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    description: getDescription(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getProfile: (showId) => {
      dispatch(getProfile(showId));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ShowProfileContainer);
