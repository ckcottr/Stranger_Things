import React from 'react'
import ReactDOM from 'react-dom';

const Login = ({userToken}) => {
    const [user, setUser] = useState({username: '', password: ''})

    async function saveToken() {
        try {
            const data = await API.makeRequest({'/lilo' , 'posts', user})
            localstorage.setItem('user-token', data.token);
            makeToken(data.token);
        } catch(error) {
            alert(error)
        }
    }
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