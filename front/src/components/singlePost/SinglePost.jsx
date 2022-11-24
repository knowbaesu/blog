import "./singlePost.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})


  useEffect(()=>{
const getPost = async ()=>{
  const res = await axios.get("/posts/"+ path)
  setPost(res.data)
}
  getPost()
  }, [path])
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" 
          />
          )}
            <h1 className="singlePostTitle">
            {post.title}
                <div div className="singlePostEdit">  
                <ModeEditIcon className="singlePostIcon one"/>
                <DeleteIcon className="singlePostIcon two"/>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Autor: 
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>   
            <p className="singlePostDesc">
            {post.desc}
            </p>
        </div>
    </div>
  )
}
