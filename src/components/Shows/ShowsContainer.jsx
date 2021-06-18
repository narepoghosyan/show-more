import { connect } from "react-redux";
import { searchShowTC, updateSearchTerm } from "../../redux/shows-reducer";
import {
  getIsFetching,
  getSearchTerm,
  getShows,
} from "../../redux/shows-selectors";
import Shows from "./Shows";

const mapStateToProps = (state) => {
  return {
    shows: getShows(state),
    searchTerm: getSearchTerm(state),
    isFetching: getIsFetching(state),
  };
};

const ShowsContainer = connect(mapStateToProps, {
  updateSearchTerm,
  searchShowTC,
})(Shows);

export default ShowsContainer;
