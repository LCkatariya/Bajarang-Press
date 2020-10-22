import { Grid } from '@material-ui/core';
import React from 'react';
import SimpleCard from './card';

const GridCard = () =>{

    return(
        <Grid container spacing = {4}>
            <Grid item xs={12} sm={4} >
                <SimpleCard jobTital="1000 poster" date="12/9/20"/>
            </Grid>
            <Grid item xs={12} sm={4} >
                <SimpleCard jobTital="200 visiting card" date="2/8/20"/>
            </Grid>
            <Grid item xs={12} sm={4} >
                <SimpleCard jobTital="6 flex" date="12/7/20"/>
            </Grid>
            <Grid item xs={12} sm={4} >
                <SimpleCard jobTital="7 bil book" date="15/6/20"/>
            </Grid>
            <Grid item xs={12} sm={4} >
                <SimpleCard jobTital="2 card" date="8/6/20"/>
            </Grid>
        </Grid>
    )
}
export default GridCard;