import { Box, Typography } from "@mui/material";
import { palette } from "../../theme/colors";

const ErrorPage = () => {
  return (
    <Box
      minHeight={500}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography fontSize={60} color={palette.darkGrey}>
        404 Not found :(
      </Typography>
    </Box>
  );
};

export default ErrorPage;
