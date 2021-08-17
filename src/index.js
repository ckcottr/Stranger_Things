import ReactDOM from 'react-dom';
import React from 'react';
import Login from './components/lilo';
import Home from './components/home'
import {BrowserRouter as Router, Route, Switch, Link }from "react-router-dom"
<link href="/public/style.css"></link>

const App = ()=>{
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