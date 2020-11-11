import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SwipeableTemporaryDrawer from './drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
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
        textDecoration: "underline"
    }
},
}));

const Header = () =>{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hendleClick = () =>{
    localStorage.removeItem('success');
    window.location.reload(false);
  }

  return (
    <div className={classes.root}>
      <AppBar  position='fixed' >
        <Toolbar>
          
          <SwipeableTemporaryDrawer />
          
          <Typography className={classes.title} variant="h6"  >
           <Link className={classes.link} href="/jobUpload" >Job Upload</Link> 
          </Typography>      
            
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ForumIcon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem ><Link className={classes.link} href="/profile">Profile</Link></MenuItem>
                <MenuItem ><Link className={classes.link} onClick={hendleClick}>Logout</Link></MenuItem>
              </Menu>
            
            </Toolbar>
          </AppBar>
        </div>
  );
}

export default Header;