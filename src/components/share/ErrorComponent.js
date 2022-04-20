import { Box, Typography } from "@mui/material";
import { palette } from "../../theme/colors";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const ErrorComponent = ({ height }) => {
  const style = {
    box: {
      width: "90%",
      minHeight: height,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: palette.grey,
      marginTop: 1,
      marginBottom: 1,
      boxSizing: "border-box",
      marginLeft: "auto",
      marginRight: "auto",
    },
    icon: {
      color: palette.darkGrey,
      fontSize: 100,
      width: "100%",
    },
  };

  return (
    <Box display="flex" sx={style.box}>
      <SentimentDissatisfiedIcon
        fontSize="inherit"
        color="inherit"
        sx={style.icon}
      />
      <Typography fontSize={30} color={palette.darkGrey}>
        Fetch Error
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
