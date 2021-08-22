import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getPosts } from "./utilites/api";

export const Sections = ({}) =>{
    
    return(
        <div>
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            <h3>{post.location}</h3>
            <h3>{post.price}</h3>

        </div>
    )
}