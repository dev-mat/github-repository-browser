import { Stack, Grid } from "@mui/material";
import { CustomButton } from "./CustomButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const style = {
  stack: {
    width: "100%",
    padding: 1,
    marginTop: 5,
    marginBottom: 5,
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
  button: {
    width: 220,
    minWidth: 200,
    marginLeft: 1,
    marginTop: 2,
    marginRight: 1,
    display: "flex",
  },
};

const Navigation = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={11} md={11} lg={10} xl={9}>
        <Stack
          flexDirection="row"
          justifyContent="space-around"
          sx={style.stack}
        >
          <CustomButton
            onClick={() => navigate("/repo-list")}
            startIcon={<FormatListBulletedIcon />}
            sx={style.button}
          >
            Repo List
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/repo-search")}
            startIcon={<SearchIcon />}
            sx={style.button}
          >
            Repo Search
          </CustomButton>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={11} md={11} lg={10} xl={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Navigation;
