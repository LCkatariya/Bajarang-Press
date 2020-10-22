import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiPhoneNumber from "material-ui-phone-number";
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialogTitle-root': {
           color:'blue' ,
    }
}
})); 

export default function FormDialog(props) {
 const [state, setState] = React.useState();
  const classes = useStyles();
  const history = useHistory();
  

  const handleClickSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(state);    
  }

  return (
    <div>
      <Dialog open={true} onClose={()=>{history.push('/')}} aria-labelledby="form-dialog-title">
      
        <form onSubmit={handleClickSubmit}> 
          <DialogTitle className={classes.root} id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <MuiPhoneNumber           
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"in"}
                variant="outlined"
                value={state}
                onChange={(e)=>{setState({contact:e});}}
                fullWidth
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{history.push('/')}} color="primary">
              Cancel
            </Button>
            <Button type="submit"  color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
     
      </Dialog>
    </div>
  );
}
