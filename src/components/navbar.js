import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to= "/login">Login</Link>
            <Link to= "/register">Register</Link>
        </div>
       

    )
}

export default Navbar