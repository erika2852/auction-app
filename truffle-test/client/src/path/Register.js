import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
 
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const crossOriginIsolated = {withCredentials: true}
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
       console.log(inputId);
      axios.put('/user/register/', null, {
        params: {
        'id': inputId,
        'password': inputPw
        }
    },crossOriginIsolated)
    .then(response => console.log(crossOriginIsolated))
    .catch()
    }
 
 
    return(
        <div>
            <h2>gin</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>register</button>
            </div>
        </div>
    )
}
 
export default Login;
