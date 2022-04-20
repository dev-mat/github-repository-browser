import { Stack } from "@mui/material";
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
  },
  button: {
    width: "30%",
    display: "flex",
  },
};

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Stack flexDirection="row" justifyContent="space-evenly" sx={style.stack}>
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
  );
};

export default Navigation;
