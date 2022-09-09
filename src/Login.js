import React, { useEffect, useState } from 'react'
import './Login.css'
import { LoginAPI } from './LoginAPI'
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as linkConfig from './config';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isGo, setIsGo] = useState(false);

    const {
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = () => {
        if (username === "" || password === "") {
            return;
        }

        const login = new LoginAPI(username, password);

        console.log(login)
        login.then((data) => {
            console.log(data)
            if (data === 0) {
                setIsGo(true)
            }
            else {
                alert('Login Failed')
            }
        });

    }

    if (isGo) {
        return <Navigate to='/About' />
    }

    return (
        <div className='main'>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <label htmlFor="uname"><b>Email Address</b></label>
                        <input className='label-input'
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }
                            }
                            id="username"
                            name='username'
                            required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input className='label-input'
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }
                            }
                            id="password"
                            name='password'
                            required />

                        <button type='submit'>Login</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
