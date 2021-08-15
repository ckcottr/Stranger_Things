import ReactDOM from 'react-dom';
import React from 'react';
import login from './components/lilo';
import Home from './components/home'

const App = ()=>{
    return (
        <>
        <div>
            <route path = "/"><Home/></route>
            <route path = "/login"><login/></route>
        </div>
        
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));