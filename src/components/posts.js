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
const postElement = postList.map((post, i) =>
<h1>{post.title}</h1>
{/* <h2>{post.description}</h2>
<h3>{post.price}</h3>
<h3>{post.lcoation}</h3> */}

//  <Post title={post.title}
//                                                 price={post.price}
//                                                 description={post.description}
//                                                 location={post.location}/>
                                                );

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