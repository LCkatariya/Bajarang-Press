import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';


const styles = theme =>({
    root: {
        position: 'fixed',
        top:'auto',
        bottom: 0,
        textAlign:'center',
        padding: theme.spacing.unit * 1.8,
    },
    
})

function AutoGrid(props){
    const date = new Date().getFullYear();

    const {classes} = props;

    return(
        <AppBar className={classes.root} >
            <Typography>
            © {date} Bajarang Press All Rights Reserved
            </Typography>
        </AppBar>
    )
}
export default withStyles(styles)(AutoGrid);