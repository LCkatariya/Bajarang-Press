import React from 'react';
import { useHistory } from 'react-router-dom';
import Verification from './verification';
import { postOtp } from './postAction';


export default function Otp(){
    const history = useHistory();

   const handleSubmit=(data)=>{
        console.log('form data' , data);
        postOtp(data);
        alert(JSON.stringify(data) );
        history.push('/');
    }

    return(
        <Verification onSubmit={handleSubmit}></Verification>
    )
}