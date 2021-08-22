import React from 'react';
import ReactDOM from 'react-dom';
import navbar from './components/navbar';

//What do we want on the home screen?
const Home = (userPosts, setUserPosts) => {
    return(
        <div>
        <h1 id="welcome">Welcome to On My Block</h1>
        <p id="body">Lorem ipsum.</p>
        </div>
    )
}

export default Home;