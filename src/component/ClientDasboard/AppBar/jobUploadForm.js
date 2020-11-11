import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Card,Button, makeStyles, CardContent} from '@material-ui/core';
import { postJobData } from '../../account/postAction';
import Input from '@material-ui/core/Input';


const useStyle = makeStyles({
    root:{
         textAlign:"center",       
         transform: 'scale(.9)',
         background:"#EEEEEE" ,
         marginTop: 70,
         marginBottom:40
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

const JobForm = (props) => {
    const classes = useStyle();
    const [job_type , setJobType] = React.useState();
    const [paper_material , setPaperMaterial] = React.useState();
    const [size , setSize] = React.useState();
    const [quantity , setQuantity] =React.useState();
    const [description , setAddMore] = React.useState();
    const [file_name , setSelectedFiles] = React.useState();
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const contact1 = JSON.parse(localStorage.getItem('contact'));
        // const contact2 = contact1.contact;
        // const contact = '' + contact2;
        const files={file_name,job_type,paper_material,size,quantity,description }
        console.log('contact-jobupload' );
        props.onSubmit(files);
    }

  return (            
    <Card className = {classes.root}>
        <Typography className={classes.user} variant="h5">
        JobUploadForm
        </Typography>
        
        <form onSubmit = {handleSubmit}>
            <CardContent>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            
                            id="JobType"
                            name="JobType"
                            label="JobType"
                            value={job_type}
                            onChange={e=>{setJobType(e.target.value)}}
                            fullWidth
                            autoComplete ="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            
                            id="PaperMaterial"
                            name="PaperMaterial"
                            label="PaperMaterial"
                            value={paper_material}
                            onChange={e=>{setPaperMaterial(e.target.value)}}
                            fullWidth
                            autoComplete ="Paper-Material"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            
                            id="Size"
                            name="Size"
                            label="Size"
                            value={size}
                            onChange={e=>{setSize(e.target.value)}}
                            fullWidth
                            autoComplete="Size"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            value={quantity}
                            onChange={e=>{setQuantity(e.target.value)}}
                            fullWidth
                            autoComplete="quantity"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                           id="add-more"
                           name="add-more"
                           label="description"
                           value={description}
                           onChange={e=>{setAddMore(e.target.value)}}
                           fullWidth
                           autoComplete="add-more"
                        
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Input
                        
                        id="file-upload"
                        name="file_name"
                        type="file"
                        label=" "
                        //value={file_name}
                        onChange={e=>{setSelectedFiles(e.target.files)}}
                        autoComplete="file_name"
                        fullWidth
                        
                    />
                    </Grid>
                        
                </Grid>
            </CardContent>
        
            <Button className={classes.action} type='submit' size="large" variant="outlined" color="primary">
            Submit
            </Button>
        </form>
    </Card>
     

      );
}

export default function JobUploadForm(){

    const handleSubmit = (data) =>{
        console.log('jobUploadData' , data) 
        postJobData(data);
     
    }

    return(
        <JobForm onSubmit={handleSubmit}></JobForm>
    )
}