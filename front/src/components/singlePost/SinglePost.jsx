import "./singlePost.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/"
  const {user} = useContext(Context)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)
  console.log("path",path)

  useEffect(()=>{
const getPost = async ()=>{
  const res = await axios.get("/posts/"+ path)
  setPost(res.data)
  setTitle(res.data.title)
  setDesc(res.data.desc)  
}
  getPost()
  }, [path])

const handleDelete = async ()=>{
  try {
    await axios.delete("/posts/" + path,{
      data: {username: user.username}
    })
    window.location.replace("/")
  } catch (err) {

  } 
  
}

const handleSubmit = async ()=>{
  try {
  await axios.put("/posts/" + path, {
    username: user.username, title: title, desc: desc
  })
  
  setUpdateMode(false)
  } catch (err) {}
}

  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" 
          />
          )}  {updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (
            <h1 className="singlePostTitle">
            {title}
            {post.username === user.username && (
                <div div className="singlePostEdit">  
                <ModeEditIcon className="singlePostIcon one" onClick={()=>setUpdateMode(true)} />
                <DeleteIcon className="singlePostIcon two" onClick={handleDelete} />
                </div>
            )}
            </h1>
          )
        }
           
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Autor: 
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? <textarea className="singlePostDescInput" value={desc} autoFocus onChange={(e)=>setDesc(e.target.value)}  /> :  <p className="singlePostDesc">
            {desc}
            </p>}
              {updateMode && <button className="singlePostButton" onClick={handleSubmit}>Update</button>}
        </div>
    </div>    
  )
}
