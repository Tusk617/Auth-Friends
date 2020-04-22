import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";


export const FriendsList = () => {
    const [friend, setFriend] = useState({
        id: 0,
        name: '',
        age: 0,
        email: '',
        friends: []
    })

    useEffect(() => {
        axiosWithAuth().get('/api/friends')
        .then(response => {
            console.log(response.data)
            setFriend({
                ...friend,
                friends: response.data
            })
        })
    }, [])
    


    return (
        <div>
            <h1>Your Current Friends:</h1>
            <form>
                <input 
                    type="text"
                    name="friendName"
                    placeholder="Friends Name"
                /><br/>
                <input 
                    type="text"
                    name="friendAge"
                    placeholder="Friends Age"
                /><br/>
                <input 
                    type="email"
                    name="friendEmail"
                    placeholder="Friends Email"
                />
                <div className="FriendsList">
                    {friend.friends.map(person => {
                       return <>
                        <h3>{person.name}</h3>
                        <p>{person.age}</p>
                        <p>{person.email}</p>
                        </>
                    })}

                </div>
            </form>
        </div>
    )
}

