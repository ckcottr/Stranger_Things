import {AuthFields} from './AuthFields'

const Register = () => { 
    async function handleSubmit() {
        const response= await fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'superman27',
                    password: 'krypt0n0rbust'
            }
         })
    }) 
}  
    

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