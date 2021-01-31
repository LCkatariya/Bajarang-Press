import React from 'react';
import { makeStyles,Card,CardActions,CardContent,Button
  ,Typography,Divider } from '@material-ui/core';

  
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: "center"
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "blue",
    fontSize: "25px",
    
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});

export default function SimpleCard(Props) {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {Props.date}
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h5" >
          {Props.jobTital}
        </Typography>
        <Typography className={classes.pos} >
          
        </Typography>
        <Typography variant="body2" component="">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
  );
}
