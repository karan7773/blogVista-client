import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


export default function EditPost() {
    const {id}=useParams()
    const navigate=useNavigate();
    const [post,setpost]=useState({
        title: '',
        summary: '',
        content: '',
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

    useEffect(()=>{
        axios.get(`/post/${id}`)
        .then((info) => {
        //   console.log(info.data);
          setpost(info.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },[])
    
    const  formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    async function handdlePostUpdate(e){
        e.preventDefault();
        const {title,summary,content}=post;
        axios.patch(`/update/${id}`,{title,summary,content}).then((res)=>{
            // console.log(res);
            setpost({});
            toast.success("update successful")
            navigate('/')
        }).catch((error)=>{
            console.log(error);
        })
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
            <button className='post_btn' onClick={handdlePostUpdate}>Update Post</button>
        </form>
    )
};
