import React from "react"
import {Link} from "react-router-dom"
import './style/home.css'







function navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default navbar;