import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { UserContext } from "./UserContext";

export default function PostPage() {
  const [postinfo, setPostinfo] = useState({});
  const { id } = useParams();
  const {user}=useContext(UserContext);
//   console.log(user);

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

  const formattedDate = postinfo.createdAt
    ? format(new Date(postinfo.createdAt), 'MMM d, yyyy HH:mm')
    : '';
  const author_name=postinfo.author ? postinfo.author.name : '';
  const user_id=user?user.id:'';
  const post_author_id=postinfo.author?postinfo.author._id:"";
//   console.log(user , post_author_id);

  return (
    <div className='post_page'>
      <h1>{postinfo.title}</h1>
      <time>{formattedDate}</time>
      <div className='author'>by {author_name}</div>
      {user_id===post_author_id ? (
        <div className='edit-row'>
            <button className='edit-btn'>Edit this Post</button>
        </div>
      ):''}
      <div dangerouslySetInnerHTML={{ __html: postinfo.content }} />
    </div>
  );
}
