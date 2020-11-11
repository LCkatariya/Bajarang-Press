import fetch from 'isomorphic-fetch';
import Verification from './verification';



export function postPhone(data){

    return fetch('http://34.206.109.62:8000/login/',{
        method:'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json',
            
        }
    }).then(res => res.json()
    ).then(data => {
        localStorage.setItem('otp' , data.otp)

      }
    ).catch(err => err);
}



export function postOtp(data){

    return fetch('http://34.206.109.62:8000/otpverify/',{
        method:'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json',
            
        }
    }).then(res =>res.json()
    ).then(data =>{
        
        if (data.success===true) {

            console.log('Verification id' , data.id);
            localStorage.setItem('id' , data.id);
            localStorage.setItem('token' , data.token);
            localStorage.setItem('success' , data.success);
            window.location.reload(true);

        }if (data.success===false) {
            localStorage.setItem('success' , data.success);
            alert('otp is not valid');
            //window.location.reload(true);
        } else {
            
        }
    }
    ).catch(err => err);
}


export function putData(data){

    const myHeaders = new Headers(); 
    myHeaders.append('Content-Type', 'application/json'); 
    myHeaders.append('Authorization', localStorage.getItem('token'));

        return fetch(`http://34.206.109.62:8000/profile/${JSON.parse(localStorage.getItem('id'))}/`,{
            method:'put',
            mode:'cors',
            body: JSON.stringify(data),
            headers: myHeaders
        }).then(res => {
            console.log('2-post' , res);
            return res;
        }).catch(err => err);
    }
    


export function postJobData(data){

    var formData = new FormData();
  
    formData.append('file_name', data.file_name[0]);
    formData.append('job_type', data.job_type);
    formData.append('paper_material' , data.paper_material);
    formData.append('size' , data.size);
    formData.append('quantity' , data.quantity);
    formData.append('description' , data.description);
   // console.log();
    const myHeaders = new Headers(); 
    //myHeaders.append('Content-Type', 'application/json'); 
    myHeaders.append('Authorization', localStorage.getItem('token'));
    
        return fetch(
            'http://34.206.109.62:8000/user/upload/' ,{
            method:'post',
            mode:'cors',
            body: formData ,

            headers: myHeaders
           
        }).then(res => {
            console.log('file upload response' , res);
            return res;
        }).catch(err => err);
    }
    