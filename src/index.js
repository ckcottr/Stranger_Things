import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/lilo';
import Home from './components/home'
import {BrowserRouter as Router, Route, Switch, Link }from "react-router-dom"
<link href="/public/style.css"></link>

const App = ()=>{
    const [isNewUser, setIsNewUser] = useState(true)
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser}/>
        } else {
            return <Register toggleNewUser />
        }
    }
    return (
        <>
        <Router>
            <div>
            <Route exact path = "/login"><Login/></Route>
            {/* <Route exact path = "/posts"><Posts/></Route>
            <Route exact path = "/profile"><Profile/></Route> */}
            <Route exact path = "/"><Home/></Route>
            </div>
        </Router>
        
        
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));