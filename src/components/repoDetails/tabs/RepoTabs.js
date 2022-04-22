import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "./TabPanel";
import Commits from "../commits/Commits";
import Releases from "../releases/Releases";
import Issues from "../issues/Issues";
import { useState } from "react";
import { palette } from "../../../theme/colors";
import { styled } from "@mui/material/styles";

const style = {
  tabs: {
    color: palette.darkGrey,
    marginTop: 5,
    marginBottom: 2,
  },
  tab: {
    color: palette.darkGrey,
  },
};

const StyledTabs = styled(Tabs)({
  borderBottom: `1px solid ${palette.darkGrey}`,
  "& .MuiTabs-indicator": {
    backgroundColor: palette.darkGrey,
  },
  "& .Mui-selected": {
    fontWeight: "bold",
  },
});

const RepoTabs = ({
  login,
  repo,
  commitsCount,
  releasesCount,
  issuesCount,
}) => {
  const [value, setValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledTabs
        sx={style.tabs}
        value={value}
        onChange={handleTabChange}
        variant="fullWidth"
      >
        <Tab sx={style.tab} label={`Commits (${commitsCount})`} />
        <Tab sx={style.tab} label={`Releases (${releasesCount})`} />
        <Tab sx={style.tab} label={`Issues (${issuesCount})`} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Commits login={login} repo={repo} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Releases login={login} repo={repo} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Issues login={login} repo={repo} />
      </TabPanel>
    </Box>
  );
};

export default RepoTabs;
