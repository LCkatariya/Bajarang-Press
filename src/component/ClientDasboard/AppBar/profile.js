import { putData } from '../../account/postAction';

import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, CardContent, Card, } from '@material-ui/core';


export default function App(){

   const handleSbmit = (data) => {
    console.log('my data' , data)
    putData(data);
   }

  return(
    <AddressForm onSubmit = {handleSbmit}></AddressForm>
  )
}




const useStyle = makeStyles({
    root:{
         textAlign:"center",       
         transform: 'scale(0.9)',
         background:"#EEEEEE",
         marginTop: 70 ,
         marginBottom: 30
         
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

const AddressForm = (props)=> {
    const classes = useStyle();
    const [firstname, setFirstname] = React.useState();
    const [lastname, setLastname] = React.useState();
    const [contact, setContact] = React.useState();
    const [email, setEmail] = React.useState();
    const [address1, setAddress1] = React.useState();
    const [city, setCity] = React.useState();
    const [state, setState] = React.useState();
    const [zip, setZip] = React.useState();
    const [country, setCountry] = React.useState();

    // const Token =localStorage.getItem('token');
    // console.log('token' , Token);

       useState(()=>{
        const myHeaders = new Headers(); 
        myHeaders.append('Content-Type', 'application/json'); 
        myHeaders.append('Authorization', localStorage.getItem('token'));
        // console.log('1-post');
            return fetch(`http://34.206.109.62:8000/profile/${JSON.parse(localStorage.getItem('id'))}/`,{
                method:'get',
                mode:'cors',
                body: JSON.stringify(),
                headers: myHeaders
            }).then(res => 
                // console.log('2-post' , res);
                res.json()
            ).then(data=>{console.log('user data' , data);
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setContact(data.contact);
            setEmail(data.email);

            const add = data.address;
            const arr = add.split(',');
            //console.log(arr);
            setAddress1(arr[0]);
            setCity(arr[1]);
            setState(arr[2]);
            setZip(arr[3]);
            setCountry(arr[4]);
            }).catch(err => err);
        },[])
        
       

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const  id = '6';
        const address = address1+","+city+","+state+","+zip+","+country;
        const value = {id,firstname,lastname,contact,email,address};
        props.onSubmit(value);
        console.log('my value' , address)
       
      }
    

  return (            
    <Card className = {classes.root} >
        <Typography className={classes.user} variant="h5">
            User Profile
        </Typography>
        <form onSubmit={handleSubmit}>
        <CardContent>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        defaultValue=" "
                        // variant="outlined"
                        label="firstname"
                        id="firstName"
                        name="firstName"
                        value={firstname}
                        onChange={e=>{setFirstname(e.target.value)}}
                        fullWidth
                        autoComplete ="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        
                        id="lastName"
                        name="lastName"
                        //variant="outlined"
                        label="Last name"
                        defaultValue=" "
                        value={lastname}
                        onChange={e=>{setLastname(e.target.value)}}
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        requiredontary
                        id="contect"
                        label="content"
                        name="contect"
                        defaultValue=" "
                        value={contact}
                        onChange={e=>{setContact(e.target.value)}}
                        fullWidth
                        autoComplete ="content"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        label="email"
                        name="email"
                        defaultValue=" "
                        value={email}
                        onChange={e=>{setEmail(e.target.value)}}
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        label="Address1"
                        name="address1"
                        defaultValue=" "
                        value={address1}
                        onChange={e=>{setAddress1(e.target.value)}}
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextField
                        
                        required
                        id="city"
                        label="city"
                        name="city"
                        defaultValue=" "
                        value={city}
                        onChange={e=>{setCity(e.target.value)}}
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                    id="state"
                    label="State/Province/Region" 
                    name="state"
                    defaultValue=" "
                    value={state}
                    onChange={e=>{setState(e.target.value)}} 
                    fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        label="Zip / Postal code"
                        name="zip"
                        defaultValue=" "
                        value={zip}
                        onChange={e=>{setZip(e.target.value)}}
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        label="Country"
                        name="country"
                        defaultValue=" "
                        value={country}
                        onChange={e=>{setCountry(e.target.value)}}
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                        
            </Grid>
            
            
        </CardContent>
        
            <Button className={classes.action} type="submit" size="large" variant="outlined" color="primary">
            Submit
            </Button>
            </form>
    </Card>
     

      );
}