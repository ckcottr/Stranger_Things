import ReactDOM from 'react-dom';
import React from 'react';
import login from './components/lilo';
import Home from './components/home'

const App = ()=>{
    return (
        <>
        <div>
            <route path = "/"><home/></route>
            <route path = "/login"><lilo/></route>
        </div>
        
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));