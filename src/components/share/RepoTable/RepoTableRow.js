import { TableRow, TableCell, Typography, Box } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { palette } from "../../../theme/colors";
import CircleIcon from "@mui/icons-material/Circle";
import { login } from "../../../api/userData";

const style = {
  cell: {
    "&:hover": {
      backgroundColor: palette.lightGrey,
      cursor: "pointer",
    },
  },
  link: {
    textDecoration: "none",
  },
};

const RepoTableRow = ({ repo }) => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      pathname: "/repo-details",
      search: createSearchParams({
        login: login,
        repo: repo.name,
      }).toString(),
    });
  };

  return (
    <TableRow>
      <TableCell sx={style.cell} onClick={() => handleNavigate()}>
        <Typography fontSize={20} color={palette.darkestGrey} fontWeight="bold">
          {repo.name}
        </Typography>
        <Typography fontSize={15} color={palette.darkGrey}>
          {new Date(repo.createdAt).toLocaleDateString("pl-PL")}
        </Typography>
        <Box display="flex" alignItems="center">
          {repo.primaryLanguage ? (
            <>
              <Typography fontSize={15} color={palette.darkestGrey}>
                {repo.primaryLanguage.name}
              </Typography>
              <CircleIcon
                sx={{ color: repo.primaryLanguage.color, fontSize: 15 }}
              />
            </>
          ) : (
            <Typography fontSize={15} color={palette.darkestGrey}>
              Unknown language
            </Typography>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default RepoTableRow;
