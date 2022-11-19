import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
function Login({ handleButtonClick }) {
    const navigate = useNavigate();
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [Jdata , setJdata] = useState('')
	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
       console.log(inputId);
      axios.put('/user/login/', null, {
        params: {
        'id': inputId,
        }
    })
    .then(response => setJdata(response.data))
    .catch()
   
    if(inputPw === Jdata.password)
    {
        console.log("같음");
        handleButtonClick();
        navigate("/second");
    }
    else{
        alert('이메일 주소에 @를 입력해주세요');
    }
    
    }

    
 
 
 
    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}
 

export default Login;
