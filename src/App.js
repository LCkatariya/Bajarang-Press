import React from 'react';
//import './App.css';

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import NavbarDash from '../src/component/homePage/Navbar';
//import Footer from '../src/component/homePage/Footer';
import Slider from './component/homePage/slider';
import App1 from './App1';
import Footer from './component/homePage/Footer';


function App() {
  
  const number = JSON.parse(localStorage.getItem('success'));
console.log('true', number);
// if (number===true) {
//   //alert('success');
// } else if (number===false) {
//   alert('otp is not valid');
//   localStorage.removeItem('success');
// } else {
  
// } 

  return (
    <BrowserRouter>
      <div className="">
     
        {(number===true)
        ?<App1 />
        // :(number===false) 
          
        //   ?<>
        //   <NavbarDash />
        //   <Slider />
        // </>
        
          :<>
            <NavbarDash />
            <Slider />
            <Footer />
          </>
        }
       
       
      </div>
    </BrowserRouter>
  );
}

export default App;
