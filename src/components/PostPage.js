import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { UserContext } from "./UserContext";
import toast from 'react-hot-toast';

export default function PostPage() {
  const navigate=useNavigate();
  const [postinfo, setPostinfo] = useState({});
  const { id } = useParams();
  const {user}=useContext(UserContext);

  useEffect(() => {
    axios
      .get(`/post/${id}`)
      .then((info) => {
        // console.log(info.data);
        setPostinfo(info.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handdleDelete(){
    axios.delete(`/post/${id}`).then((res)=>{
      console.log(res);
      navigate('/');
      toast.success("deleted succesfully")
    })
  }

  const formattedDate = postinfo.createdAt
    ? format(new Date(postinfo.createdAt), 'MMM d, yyyy HH:mm')
    : '';
  const author_name=postinfo.author ? postinfo.author.name : '';
  const user_id=user?user.id:'';
  const post_author_id=postinfo.author?postinfo.author._id:"";

  return (
    <div className='post_page' style={{"padding": "10px","max-width": "700px","margin": "0 auto"}}>
      <h1>{postinfo.title}</h1>
      <time>{formattedDate}</time>
      <div className='author'>by {author_name}</div>
      {user_id===post_author_id ? (
        <div className='edit-row'>
            <button className='edit-btn'><Link to={`/editpost/${postinfo._id}`}>Edit this Post</Link></button>
            <button className='edit-btn' onClick={handdleDelete}>Delete this Post</button>
        </div>
      ):''}
      <div dangerouslySetInnerHTML={{ __html: postinfo.content }} />
    </div>
  );
}
