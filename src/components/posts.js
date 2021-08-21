// import { privateDecrypt } from "crypto";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// import API from '../components/utilites/api';

const Posts = ({postList, setPostList}) => {
    // useEffect( async function () {
    //     try {
    //         const data = await API.makeRequest(`/api/2015-OKU-RM-WEB-PT/posts`, 'GET');
    //         console.log(data);
    //         setPostList(data.data.posts);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }, []);
    console.log(postList);


const postElement = postList.map((post, i) => <Post title={post.title}
                                                price={post.price}
                                                description={post.description}
                                                location={post.location}
/>);

    return (
        <div>
            <h1>POSTS</h1>
            {postElement}
        </div>
    )
}

export default Posts

// fetch -> console.log -> array of posts(useState) -> map over the array -> go back and add a button at the bottom
// pass it in the props