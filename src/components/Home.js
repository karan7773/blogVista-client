import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

export default function Home() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('/getAllPosts').then((res)=>{
            console.log(res.data)
            setPosts(res.data)
        })
    },[])
    return(
        <>
            {posts.length>0 && posts.map((post)=>{
                return <Post key={post._id} id={post._id} title={post.title} summary={post.summary} author_name={post.author.name} createdAt={post.createdAt} image={post.image} />
            })}
        </>
    )
};
