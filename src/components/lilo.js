import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Login = ({ userToken }) => {
    function handleChange(event) {
        const userKey = event.target.attributes['name'].value
        const newState = { ...user }
        newState[userKey] = event.target.value
        setUser(newState)
    }
    const [user, setUser] = useState({ username: '', password: '' })
    async function saveToken(event) {
        event.preventDefault()
        try {
            // const data = await API.makeRequest({'lilo','posts', user})
            const response = await fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: '',
                        password: ''
                    }
                })
            })
            const data = await response.json()
            localstorage.setItemuser - token('', data.token);
            (data.token);
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <form onSubmit={saveToken}>
                <input type="text" onChange={handleChange} required name="username" placeholder="username"></input>
                <input type="password" required name="password" placeholder="password"></input>
                <button>Log In</button>
            </form>

        </div>
    )


}





export default Login;