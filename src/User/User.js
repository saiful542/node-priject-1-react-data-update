import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const updateHandle = (id) => {

    }


    //DELETE
    const deleteHandle = (id) => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted success')
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers)

                    }
                })
        }

    }

    return (
        <div>
            <h1>user</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name}
                        <NavLink to={`/User/Update/${user._id}`}><button onClick={() => updateHandle(user._id)}>update</button></NavLink>
                        <button onClick={() => deleteHandle(user._id)}>x</button>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default User;