import React, { useState } from "react";


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <input 
                type="text"
                name="username"
                value={username}
                placeholder="Username:"
                onChange={handleChangeUsername}
            
            />
            <input 
                type="password"
                name="password"
                value={password}
                placeholder="Password:"
                onChange={handleChangePassword}
            />
        </div>
    )
}