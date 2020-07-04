import React, { Fragment } from "react";
import useStyle from "./HeaderStyle";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from "@material-ui/core";

const [checked, setChecked] = React.useState(false);

const ListItem = (props) => {
    const {
        text,
        handleChange,
    } = props;
    const classes = useStyle();

    return (
        <Grid container direction="row" spacing={2}>
            <Grid item>
                <Checkbox checked={checked} onChange={() => {
                    setChecked(true);
                    handleChange();
                }} />
            </Grid>
            <Grid item>
                <Typography>{text}</Typography>
            </Grid>
        </Grid>
    );
};

export default ListItem;