
import React, { useState } from "react";
import axios from 'axios'

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [username, setName] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    async function signup() {
        const getIn = { "username":username, "email":email, "password":password };
        try {
            const res = await axios.post('http://localhost:5000/register', getIn);
            console.log(res.data);
            setIsRegistered(true);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        signup();
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {isRegistered && <div className="alert success">Registration successful!</div>}
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={username} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="John Deo" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="johndeo@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login-form')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register;