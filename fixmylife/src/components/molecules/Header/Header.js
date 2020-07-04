import React from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../../images/FMLLogo.png";
import useStyle from "./HeaderStyle.js";

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar elevation={0} position="static">
      <Toolbar>
        <img src={logo} alt="FML logo" className={classes.logo} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Typography variant="h2" className={classes.applicationTitle}>
            Fix my Life
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
