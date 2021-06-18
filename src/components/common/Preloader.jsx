import { Box } from "@material-ui/core";
import preloader from "./../../assets/images/preloader.gif";

const Preloader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <img src={preloader} alt="Preloader" />
    </Box>
  );
};

export default Preloader;
