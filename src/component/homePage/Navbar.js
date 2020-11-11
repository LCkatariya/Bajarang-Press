import React from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormDialog from '../account/SignIn';
import Verification from '../account/verification';
import Submit from '../account/submit';
import Otp from '../account/otpSubmit';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:"center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    "&:hover": {
        color: "inherit",
        // textDecoration: "underline"
    }
  }
}));
const Home =() =>{
  const history = useHistory()
  // if (JSON.parse(localStorage.getItem('success'))===false) {
  //   history.push('lal');
  // } else {
  //  // history.push('/'); 
  // }
  return(
 <div></div>
)
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
          
          <Button href='/login' className={classes.link} variant="outlined" color="inherit" >
            login
          </Button>
            <Switch>
              <Route exact path ="/" component={Home} /> 
              <Route path = "/login"  component={Submit} />
              <Route path ="/lal" component={Otp} />
             
              
            </Switch>
        </Toolbar>
      </AppBar>
      
    </div></Router>
  );
}
