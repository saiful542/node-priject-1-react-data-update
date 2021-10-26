import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';

const Update = () => {
    const { id } = useParams()
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const emailHandle = (e) => {
        const newUser = { ...user }
        newUser.email = e.target.value;
        setUser(newUser)

    }
    const nameHandle = (e) => {
        // const name = e.target.value;
        const newUser = { ...user }
        newUser.name = e.target.value;
        setUser(newUser)

    }
    const handleForm = (e) => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)   
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('updated successfully')
                setUser({});
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h1>update {user?.name}</h1>
            <h2>user id: {user._id}</h2>
            <h3>email : {user.email}</h3>
            <form action="submit">
                <input onChange={nameHandle} type="text" value={user?.name} />
                <input onChange={emailHandle} type="email" value={user?.email} />
                <button onClick={handleForm}>update</button>
            </form>
        </div>
    );
};

export default Update;