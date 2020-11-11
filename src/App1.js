import React from 'react';
import './App.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './component/ClientDasboard/AppBar/AppBar';
import Footer1 from './component/homePage/footer1';
//import ClintDashboard from './component/ClientDasboard/clintDasboard';
import AddressForm from './component/ClientDasboard/AppBar/profile';
import JobUploadForm from './component/ClientDasboard/AppBar/jobUploadForm';
import GridCard from './component/ClientDasboard/Card/gridCard';
import { Grid } from '@material-ui/core';
const ClintDashboard = () =>{

  return(
      <Grid >
          <Grid item container style={{marginTop:"6rem"}}>
              <Grid item xs={12} sm={2} />
              <Grid item xs={12} sm={8} >
                  <GridCard />
              </Grid>
              <Grid item xs={12} sm={2} />
          </Grid>
      </Grid>
          
  )
}


function App1() {
  return (
    <Router>
      <div className="">
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
          
            <Switch>
              <Route exact path="/" component={ClintDashboard} />
              {/* <Route path="/cards" component={ClintDashboard} /> */}
              <Route path="/profile" component={AddressForm} />
              <Route path="/jobUpload" component={JobUploadForm} />
            </Switch>
            <Footer1 />
         </div>
         </div>
      
       
      </div>
    </Router>
  );
}

export default App1;
