import {AuthFields} from './AuthFields'

const Register = () => {
    return (
        <div>
          <form onSubmit = {(event) => {} }>  
            <input type = "text" required name = "username" placeholder = "username"></input>
            <input type = "password" required name = "password" placeholder = "password"></input>
            <button>Register</button>
            </form>  
        </div>
    )
}