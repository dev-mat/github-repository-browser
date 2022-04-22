import { TableRow, TableCell, Typography, Stack, Box } from "@mui/material";
import { palette } from "../../../theme/colors";
import AdjustIcon from "@mui/icons-material/Adjust";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CommentIcon from "@mui/icons-material/Comment";

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
  openIcon: {
    color: palette.green,
  },
  closedIcon: {
    color: palette.purple,
  },
  commentIcon: {
    color: palette.darkGrey,
    fontSize: 18,
    marginLeft: 3,
  },
};

const openIcon = (
  <Stack>
    <AdjustIcon sx={style.openIcon} />
  </Stack>
);

const closedIcon = (
  <Stack>
    <CheckCircleOutlineIcon sx={style.closedIcon} />
  </Stack>
);

const IssuesTableRow = ({ issue }) => {
  return (
    <TableRow sx={style.row}>
      <TableCell>
        <Box display="flex" flexDirection="row" alignItems="center">
          {issue.closed ? closedIcon : openIcon}
          <Typography
            marginLeft={1}
            color={palette.darkGrey}
            fontSize={17}
            fontWeight="bold"
          >
            {issue.title}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography fontSize={14} color={palette.darkGrey}>
            {new Date(issue.createdAt).toLocaleDateString("pl-PL")}
          </Typography>
          <CommentIcon sx={style.commentIcon} />
          <Typography
            fontSize={15}
            fontWeight="bold"
            color={palette.darkGrey}
            marginLeft={1}
          >
            {issue.comments.totalCount}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default IssuesTableRow;
