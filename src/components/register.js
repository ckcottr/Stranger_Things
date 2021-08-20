

const Register = () => {
    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: event.target.username.value,
                    password: event.target.password.value
                }
            })
        }).then(response => response.json())
        .then(result => {
            localStorage.setItem("token", result.data.token)
            console.log(result);
        })
        .catch(console.error)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required name="username" placeholder="username"></input>
                <input type="password" required name="password" placeholder="password"></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register