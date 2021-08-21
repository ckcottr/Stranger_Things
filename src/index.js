import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/lilo';
import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import Navbar from './components/navbar';
import Register from './components/register'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
// import './style/home.css'
import './components/style/home.css'

const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }
    }
    return (
        <>
            <Router>
                <Navbar/>
                <main>
                    <switch>
                        <div>
                            <Route exact path="/login"><Login /></Route>
                            <Route exact path="/posts"><Posts /></Route>
                            <Route exact path="/profile"><Profile /></Route>
                            <Route exact path="/register"><Register/></Route>
                            <Route exact path="/"><Home /></Route>
                        </div>
                    </switch>
                </main>
            </Router>



        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));