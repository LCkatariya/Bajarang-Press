import fetch from 'isomorphic-fetch';



export function postPhone(data){

    return fetch('http://34.206.109.62:8000/login/',{
        method:'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}



export function postOtp(data){

    return fetch('http://34.206.109.62:8000/otpverify/',{
        method:'POST',
        mode:'cors',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}