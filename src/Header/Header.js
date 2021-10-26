import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <NavLink className="NavLink" to="/Home">Home</NavLink>
            <NavLink className="NavLink"  to="/User">User</NavLink>
            <NavLink className="NavLink" to="/User/AddUser">Add user</NavLink>
            <NavLink className="NavLink" to="/User/Update/:id">Update user</NavLink>
            
        </div>
    );
};

export default Header;