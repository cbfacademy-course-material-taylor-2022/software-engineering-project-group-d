import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
// import {MoreVert} from "@mui/icons-material"
import '../styles/post.css'
import {Users} from "../dummyData"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({}); 
 

  const likeHandler =()=> {
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked);
    
  }
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users?_id=${post._id}`);
        setUser(res.data);
      };
      fetchUser();
    }, [post._id]);

  
  return (
  <>
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg'
                 src={user.profilePicture 
                  ? user.profilePicture 
                  : "imgs/profile/profilePlaceholder.jpg"} 
                alt="profile pic" />
                <span className="postUsername">
                  {Users.filter((u) => u.id === post.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
              </div>
            <div className="postTopRight">
            </div>
          </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImg' src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="imgs/like1.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}


 
