import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Card,Button, makeStyles, CardContent } from '@material-ui/core';



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

export default function JobUploadForm() {
    const classes = useStyle();
  return (            
    <Card className = {classes.root}>
        <Typography className={classes.user} variant="h5">
        JobUploadForm
        </Typography>
        
        <CardContent>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Job Type"
                        name="Job Type"
                        label="Job Type"
                        fullWidth
                        autoComplete ="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Paper-Material"
                        name="Paper-Material"
                        label="Paper-Material"
                        fullWidth
                        autoComplete ="Paper-Material"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Size"
                        name="Size"
                        label="Size"
                        fullWidth
                        autoComplete="Size"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="quantity"
                        fullWidth
                        autoComplete="quantity"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  
                        label="add-more" 
                        placeholder="Add-more"
                        fullWidth
                      
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                     required
                     id="file-upload"
                     type="file"
                     label=" "
                     fullWidth
                />
                </Grid>
            
            </Grid>
        </CardContent>
        
            <Button className={classes.action} href="/cards" size="large" variant="outlined" color="primary">
            Submit
            </Button>
    </Card>
     

      );
}