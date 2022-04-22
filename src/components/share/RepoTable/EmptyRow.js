import { TableRow, TableCell, Typography } from "@mui/material";
import { palette } from "../../../theme/colors";

const EmptyRow = () => {
  return (
    <TableRow>
      <TableCell align="center">
        <Typography fontSize={20} fontWeight="bold" color={palette.darkGrey}>
          No elements found :(
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default EmptyRow;
