import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [user, setUser] = useState()
    const navigate = useNavigate();

    async  function signup(){
        const getIn={"email":email, "password":password};
       await  axios
        .post('http://localhost:5000/login', getIn)
        .then((res) => {
          console.log(res.data); 
          setUser(res.data)
          localStorage.setItem('user', JSON.stringify(getIn))
          console.log(res.data)
    }).               
        catch((error) => console.log(error));}


        const handleSubmit = (e) => {
     
            localStorage.setItem('isLoggedIn', 'true');
        // Redirect the user to the dashboard page
            navigate('/AddBusiness');
            e.preventDefault();
            console.log(email);
            alert('Login Successful');
        }
    
       

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
                <button type="submit" onClick={signup}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register-form')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login;