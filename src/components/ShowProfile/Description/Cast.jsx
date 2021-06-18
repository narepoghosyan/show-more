import { NavLink } from "react-router-dom";
import DescriptionItem from "../../common/DescriptionItem";

const Cast = (props) => {
  let cast = props.cast.map((castItem, index) => {
    return (
      <NavLink key={castItem.id} to={"/artist-profile/" + castItem.id}>
        {castItem.name}
        {index !== props.cast.length - 1 ? " | " : " "}
      </NavLink>
    );
  });

  return <DescriptionItem descriptionKey="Cast" descriptionValue={cast} />;
};

export default Cast;
