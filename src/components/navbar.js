import { link } from "node:fs/promises";
import React from "react";
import {Link} from "react-router-dom";


function navbar() {
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default navbar;