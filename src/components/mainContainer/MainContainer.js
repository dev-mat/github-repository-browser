import { Container } from "@mui/material";
import React from "react";
import UserProfile from "../userProfile/UserProfile";
import { Grid } from "@mui/material";
import Navigation from "../navigation/Navigation";

const style = {
  container: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
};

const MainContainer = ({ children }) => {
  return (
    <Container sx={style.container}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <UserProfile />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={9}
          sx={{ backgroundColor: "white", height: "100%" }}
        >
          <Navigation />
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;
