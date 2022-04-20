import { styled, Button } from "@mui/material";
import { palette } from "../../theme/colors";

export const CustomButton = styled(Button)({
  backgroundColor: "white",
  borderColor: palette.darkGrey,
  color: palette.darkestGrey,
  fontSize: 15,
  fontWeight: "bold",
  borderWidth: 2,
  borderStyle: "solid",
});
