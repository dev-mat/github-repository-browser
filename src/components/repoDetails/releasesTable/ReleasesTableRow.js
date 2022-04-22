import { TableRow, TableCell, Typography, Stack, Chip } from "@mui/material";
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
  chip: {
    marginTop: 1,
    border: "green solid 2px",
    backgroundColor: "white",
    color: "green",
    fontWeight: "bold",
  },
};

const latest = (
  <Stack>
    <Chip sx={style.chip} label="Latest" />
  </Stack>
);

const ReleasesTableRow = ({ release }) => {
  return (
    <TableRow sx={style.row}>
      <TableCell>
        <Typography
          marginLeft={1}
          color={palette.darkGrey}
          fontSize={17}
          fontWeight="bold"
        >
          {release.name}
        </Typography>
        <Typography marginTop={1} fontSize={14} color={palette.darkGrey}>
          {new Date(release.createdAt).toLocaleDateString("pl-PL")}
        </Typography>
        {release.isLatest && latest}
      </TableCell>
      <TableCell>
        <Typography>{release.description}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default ReleasesTableRow;
