import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
  
      "& .MuiInputBase-root.Mui-disabled": {
          color: "rgba(0, 0, 0,0.0)"
      },
}
}));

export default function Verification(props) {
  const [otp, setOtp] = React.useState();
  const history = useHistory();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = JSON.parse(localStorage.getItem('contact'));
    const contact = number.contact;
    const value = {contact , otp};
    props.onSubmit(value);
 
  }

  console.log('otpsubmit')

  return (
    <div >
      
      <Dialog open={true} onClose={()=>{history.push('/')}} aria-labelledby="form-dialog-title" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter the 4-digit verification code<br/>we sent via SMS:
          </DialogContentText>
          

          <TextField 
          className={classes.root}
          id="number" 
           
          variant="outlined"
          
          value={otp}
          onChange={e=>{setOtp(e.target.value)}}
          fullWidth 
          onInput = {(e) =>{
            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,4)
        }}
        
          
          />
          </DialogContent>
       
        <DialogActions>
          <Button onClick={()=>{history.push('/login')}} color="primary">
            Back
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
      
    </div>
  );
}
