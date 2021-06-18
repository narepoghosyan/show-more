import Box from "@material-ui/core/Box";
import CommentsWrapperContainer from "./Comments/CommentsWrapperContainer";
import DescriptionWrapper from "./Description/DescriptionWrapper";

const ShowProfile = ({ description }) => {
  return (
    <Box p="20px">
      <DescriptionWrapper description={description} />
      <CommentsWrapperContainer />
    </Box>
  );
};

export default ShowProfile;
