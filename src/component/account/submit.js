import React from 'react';
import { useHistory } from 'react-router-dom';
import { postPhone } from './postAction';
import FormDialog from './SignIn';


export default function Submit(){
    const history = useHistory();

   const handleSubmit=(data)=>{
        console.log('form data' , data);
        postPhone(data);
        localStorage.setItem('contact',JSON.stringify(data));
        //alert(JSON.stringify(data) );
        history.push('/lal');
    }

    return(
        <FormDialog onSubmit={handleSubmit}></FormDialog>
    )
}