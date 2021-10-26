import React, { useRef, useState } from 'react';

const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const handle = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name: name, email: email }    //{name,email} value is the same name

        //send data to server
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                
                if(data){
                    alert('success');
                    e.target.reset()
                }

            }
            )
        nameRef.current.value = '';
        emailRef.current.value = ''

    }
    return (
        <div className="App">
            <h1>add user</h1>
            
            <form action="">
                <input type="text" ref={nameRef} />
                <br />
                <input type="email" ref={emailRef} />
                <br />
                <button onClick={handle}>handle</button>
            </form>
        </div>
    );
};

export default AddUser;