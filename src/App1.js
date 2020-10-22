import React from 'react';
import './App.css';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './component/ClientDasboard/AppBar/AppBar';
import ClintDashboard from './component/ClientDasboard/clintDasboard';
import AddressForm from './component/ClientDasboard/AppBar/profile';
import JobUploadForm from './component/ClientDasboard/AppBar/jobUploadForm';



function App1() {
  return (
    <Router>
      <div className="">
        <Header />
        <div className="auth-wrapper">
          <div className="auth-inner">
          
            <Switch>
              <Route exact path="/cards" component={ClintDashboard} />
              <Route path="/cards" component={ClintDashboard} />
              <Route path="/profile" component={AddressForm} />
              <Route path="/jobUpload" component={JobUploadForm} />
            </Switch>
         </div>
         </div>
      
       
      </div>
    </Router>
  );
}

export default App1;
