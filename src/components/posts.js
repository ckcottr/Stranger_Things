// import { privateDecrypt } from "crypto";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "./utilites/api";

// import API from '../components/utilites/api';
// const BASE_URL = 'https://strangers-things.herokuapp.com/api/2015-OKU-RM-WEB-PT/posts'
// export async function getPosts() {
//     const response = await fetch(BASE_URL)
//     console.log(response)
// }

const Posts = ({ postList, setPostList, }) => {
    useEffect(async function () {
        fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/posts')
            .then(response => response.json())
            .then(result => {
                setPostList(result.data.posts)
                console.log(result);
            })
            .catch(console.error);

        // const postAppear = await getPosts()

        // console.log(postAppear)
    }, []);
    console.log(postList);
    const postElement = postList.map((post) =>
        <div id="listOfPosts">
            <h1>Name: {post.author.username}</h1>
            <h1>Title: {post.title}</h1>
            <h2>Description: {post.description}</h2>
            <h3>Location: {post.location}</h3>
            <h3>Price: {post.price}</h3>
        </div>


    );

    return (
        <div id="posts">
            <h1>POSTS</h1>
            {postElement}
        </div>
    )
}

export default Posts