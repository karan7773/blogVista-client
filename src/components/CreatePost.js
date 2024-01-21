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
        files:""
        
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
    const converttoBase64=(e)=>{
        console.log(e);
        let fileReader=new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload=()=>{
            console.log(fileReader.result);
            setpost({...post,files:fileReader.result})
        }
        fileReader.onerror=error=>{
            console.log("error ",error);
        }
        
    }

    async function handdlePost(e){
        e.preventDefault();
        const {title,summary,content,files}=post;
        // console.log(files);
        const data=await axios.post('/newpost',{title,summary,content,files})
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
        <div style={{"padding": "10px","max-width": "700px","margin": "0 auto"}}>
            <h1>Create Post</h1>
            <form >
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
                <input 
                    type='file' 
                    onChange={(e)=>{converttoBase64(e)}}
                />
                <ReactQuill 
                    value={post.content}
                    modules={modules}
                    formats={formats}
                    onChange={(newVal)=>setpost({...post,content:newVal})}
                />
                <button className='post_btn' onClick={handdlePost}>Post</button>
            </form>
        </div>
    )
};
