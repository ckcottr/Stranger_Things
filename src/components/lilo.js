import React from 'react'
import ReactDOM from 'react-dom';

const Login = () => {
    return (
        <div>
            <form onSubmit = {(event) => {} }>  
            <input type = "text" required name = "username" placeholder = "username"></input>
            <input type = "password" required name = "password" placeholder = "password"></input>
            <button>Log In</button>
            </form>
          
        </div>
    )

    
}





export default Login;