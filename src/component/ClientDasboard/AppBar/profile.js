import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Card,Button, makeStyles, CardContent, Divider } from '@material-ui/core';

const useStyle = makeStyles({
    root:{
         textAlign:"center",       
         transform: 'scale(0.9)',
         background:"#EEEEEE"
    },
    action:{
        marginBottom:10,
        marginTop:20,
        textAlign:"center",
        fontSize:20         
    },
    user:{
        
        padding:10
    }
})

export default function AddressForm() {
    const classes = useStyle();
  return (            
    <Card className = {classes.root}>
        <Typography className={classes.user} variant="h5">
            User Profile
        </Typography>
        
        <CardContent>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete ="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="contect"
                        name="contect"
                        label="content"
                        fullWidth
                        autoComplete ="content"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="email"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Address line 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                        {/* <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid> */}
            </Grid>
            
        </CardContent>
        
            <Button className={classes.action} href="/cards" size="large" variant="outlined" color="primary">
            Submit
            </Button>
        
    </Card>
     

      );
}