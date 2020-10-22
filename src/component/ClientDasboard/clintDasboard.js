import { Grid } from '@material-ui/core';
import React from 'react';
import Header from './AppBar/AppBar';
import AddressForm from './AppBar/profile';
import GridCard from './Card/gridCard';



const ClintDashboard = () =>{

    return(
        <Grid >
            {/* <Grid item>
                <Header />
                <AddressForm />
            </Grid> */}
            <Grid item container style={{marginTop:"2.5rem"}}>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} >
                    <GridCard />
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
            
    )
}

export default ClintDashboard