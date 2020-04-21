import React, { useState, Component } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";


export const Login = (props) => {
    const [credentials, setCredentials] = useState({
        
            username: '',
            password: ''
        
    });

    const handleChange = (event) => {
        
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }


    const login = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.payload));
            props.history.push('/protected')
        })
    }


    return (
        <div>
            <form onSubmit={login}>
            <input 
                type="text"
                name="username"
                value={credentials.username}
                placeholder="Username:"
                onChange={handleChange}
            
            />
            <input 
                type="password"
                name="password"
                value={credentials.password}
                placeholder="Password:"
                onChange={handleChange}
            />
            <input type="submit"/>
            </form>
        </div>
    )
}