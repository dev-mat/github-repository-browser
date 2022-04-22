import { TableRow, TableCell, Avatar, Typography, Box } from "@mui/material";
import { palette } from "../../../theme/colors";

const style = {
  row: {
    "&:hover": {
      backgroundColor: palette.lightGrey,
      cursor: "context-menu",
    },
  },
  avatar: {
    width: 25,
    height: 25,
  },
};

const CommitTableRow = ({ commit }) => {
  return (
    <TableRow sx={style.row}>
      <TableCell>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Avatar sx={style.avatar} src={commit.author.avatarUrl} />
          <Typography
            marginLeft={1}
            color={palette.darkGrey}
            fontSize={17}
            fontWeight="bold"
          >
            {commit.author.name}
          </Typography>
        </Box>
        <Typography marginTop={1} fontSize={14} color={palette.darkGrey}>
          {new Date(commit.committedDate).toLocaleDateString("pl-PL")}
        </Typography>
      </TableCell>
      <TableCell>{commit.message}</TableCell>
    </TableRow>
  );
};

export default CommitTableRow;
