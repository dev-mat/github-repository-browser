import { Box } from "@mui/material";

const TabPanel = ({ children, value, index }) => {
  return <Box>{value === index && children}</Box>;
};

export default TabPanel;
