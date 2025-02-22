import axios from 'axios';
import React, {useState} from 'react';


const Login = () => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:5000/login', {userName, password});
        const token = response.data.token;
        console.log(token);
    }

    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={(e) => changeUserName(e.target.value)}></input>
            <input type='password' value={password} onChange={(e) => changePassword(e.target.value)}></input>
            <button type='submit'>Login</button>
        </form>
    </div>)
}

export default Login;