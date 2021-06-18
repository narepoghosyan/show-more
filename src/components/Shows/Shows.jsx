import { Box } from "@material-ui/core";
import ShowSearchForm from "./ShowSearchForm";
import Show from "./Show";
import defaultImage from "./../../assets/images/show-logo.png";
import Preloader from "../common/Preloader";

const Shows = (props) => {
  const updateSearchTerm = (e) => {
    let searchTerm = e.target.value;

    props.updateSearchTerm(searchTerm);
  };

  const searchShow = () => {
    props.searchShowTC(props.searchTerm);
  };

  return props.isFetching ? (
    <Preloader />
  ) : (
    <Box p="20px">
      <ShowSearchForm
        searchTerm={props.searchTerm}
        searchShow={searchShow}
        onTermChange={updateSearchTerm}
      />
      <Box mt="40px">
        {props.shows.map((s) => {
          let { id, name, image, summary } = s.show;

          return (
            <Show
              id={id}
              key={id}
              name={name}
              photoUrl={image ? image.medium : defaultImage}
              summary={summary}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Shows;
