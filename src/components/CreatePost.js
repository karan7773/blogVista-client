import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {

    const navigate=useNavigate();
    const [post,setpost]=useState({
        title:"",
        summary:"",
        content:"",
        // files:""
        
    })

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    }
    
    const  formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    async function handdlePost(e){
        e.preventDefault();
        const {title,summary,content}=post;
        // const files=file[0];
        const data=await axios.post('/newpost',{title,summary,content})
        if(data.error){
            console.log(data.error);
        }else{
            setpost({})
            toast.success('Posted Successfully')
            navigate('/')
            console.log(data);
        }
    }

    return(
        <form>
            <input 
                type='title' 
                placeholder='Title'
                value={post.title}
                onChange={(e)=>setpost({...post,title:e.target.value})}
            />
            <input 
                type='summary' 
                placeholder='Summary'
                value={post.summary}
                onChange={(e)=>setpost({...post,summary:e.target.value})}
            />
            {/* <input 
                type='file' 
                onChange={(e)=>setpost({...post,file:e.target.files})}
            /> */}
            <ReactQuill 
                value={post.content}
                modules={modules}
                formats={formats}
                onChange={(newVal)=>setpost({...post,content:newVal})}
            />
            <button className='post_btn' onClick={handdlePost}>Post</button>
        </form>
    )
};
