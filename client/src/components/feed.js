import React from 'react'
import { useContext, useEffect, useState } from "react";
import '../styles/feed.css'
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
// import Share from '../share/Share'
import Post from './post'
import {Posts} from "../dummyData"

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        {/* <Share/> */}
        {Posts.map((p) =>(
          <Post key = {p.id} post ={p}/>
        ))}
      </div>
    </div>
  )
}