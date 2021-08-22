import React from "react"
import {Link} from "react-router-dom"
import './style/home.css'
<<<<<<< HEAD
=======





>>>>>>> a56c319fc818c39457ef82b1876a7efa114205cb







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