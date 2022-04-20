import { Box, CircularProgress } from "@mui/material";
import { palette } from "../../theme/colors";

const LoadingComponent = ({ height }) => {
  const style = {
    box: {
      width: "100%",
      minHeight: height,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      color: palette.darkGrey,
    },
  };

  return (
    <Box display="flex" sx={style.box}>
      <CircularProgress size={50} color="inherit" sx={style.circle} />
    </Box>
  );
};

export default LoadingComponent;
