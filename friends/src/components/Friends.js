import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {Card, CardTitle, CardText, CardHeader} from 'reactstrap';


export const FriendsList = () => {
    const [friend, setFriend] = useState({
        friends: []
    })
    const [newFriend, setNewFriend] = useState({
        id: 0,
        name: '',
        age: 0,
        email: '',
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
    }, [setFriend])

    const handleChange = (event) => {
        
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value
        })
    }

    const addNewFriend = (event) => {
        // event.preventDefault()
        axiosWithAuth().post("/api/friends", newFriend)
        .then(response => {
            console.log(response)
        })
    }
    
    


    return (
        
        <div className="Friends">
            <h1>Your Current Friends:</h1>
            <form onSubmit={addNewFriend}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Friends Name"
                    value={newFriend.name}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="text"
                    name="age"
                    placeholder="Friends Age"
                    value={newFriend.age}
                    onChange={handleChange}
                /><br/>
                <input 
                    type="email"
                    name="email"
                    placeholder="Friends Email"
                    value={newFriend.email}
                    onChange={handleChange}
                /><br/>
                <input type="submit"/>
                <div className="FriendsList">
                    {friend.friends.map(person => {
                return <Card style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader>Name: {person.name}</CardHeader>
                        <CardText>Age: {person.age}</CardText>
                        <CardText>Email: {person.email}</CardText>
                        </Card>
                    })}

                </div>
            </form>
        </div>
    )
}

