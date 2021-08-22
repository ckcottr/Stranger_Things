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

const Posts = ({postList, setPostList,}) => {
    useEffect( async function () {
        fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/posts')
  .then(response => response.json())
  .then(result => { setPostList(result.data.posts)
    console.log(result);
  })
  .catch(console.error);

        // const postAppear = await getPosts()
        
        // console.log(postAppear)
    }, []);
    console.log(postList);
const postElement = postList.map((post) => 
    <div id= "listOfPosts">   
        <h1>Title: {post.title}</h1>
        <h2>Description: {post.description}</h2>
        <h3>Location: {post.location}</h3>
        <h3>Price: {post.price}</h3>
    </div>


                                                );

<<<<<<< HEAD
const Posts = ({post, setPost}) => {
    use
=======
>>>>>>> a56c319fc818c39457ef82b1876a7efa114205cb
    return (
        <div>
            <h1>POSTS</h1>
            {postElement}
        </div>
    )
}

export default Posts

