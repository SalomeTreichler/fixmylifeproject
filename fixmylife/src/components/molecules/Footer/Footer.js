import React from "react";
import useStyle from "./FooterStyle";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import tomatoLogo from "../../../images/tomatoBagLogo.png"

const Footer = () => {
    const classes = useStyle();
    return (
        <Grid container direction="row" justify="flex-end" alignItems="flex-end" spacing={1} className={classes.footer}>
            <Grid item>
                <Typography>Powered by</Typography>
            </Grid>
            <Grid item>
                <img src={tomatoLogo} alt="Tomato Bag Logo" className={classes.tomatoLogo} />
            </Grid>
        </Grid>
    );
}

export default Footer;