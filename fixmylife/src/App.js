import React, { Fragment } from "react";
import useStyle from "./AppStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./images/FMLLogo.png";
import Grid from "@material-ui/core/Grid";
import tomatoLogo from "./images/tomatoBagLogo.png"

function App() {
  const classes = useStyle();

  return (
    <Fragment>
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
            <Typography
              variant="h2"
              className={classes.applicationTitle}
            >
              Fix my Life
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={1} className={classes.footer}>
        <Grid item>
          <Typography>Powered by</Typography>
          </Grid>
        <Grid item>
          <img src={tomatoLogo} alt="Tomato Bag Logo" className={classes.tomatoLogo}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
