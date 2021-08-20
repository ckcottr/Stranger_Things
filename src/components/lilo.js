import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Login = ({ userToken }) => {
    // function handleChange(event) {
    //     const userKey = event.target.attributes['name'].value
    //     const newState = { ...user }
    //     newState[userKey] = event.target.value
    //     setUser(newState)
    //}
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    async function saveToken(event) {
        event.preventDefault()
        fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
  },
            body: JSON.stringify({
            user: {
                username: user,
                password: password
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
    }
    return (
        <div>

            <form onSubmit={saveToken}>
                <input type="text" onChange={(event) => setUser (event.target.value) } value = {user} required name="username" placeholder="username"></input>
                <input type="password" onChange={(event) => setPassword (event.target.value)} value = {password} required name="password" placeholder="password"></input>
                <button>Log In</button>
            </form>

        </div>
    )


}





export default Login;