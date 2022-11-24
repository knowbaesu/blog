import { useEffect, useState } from "react"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import Single from "../single/Single";
import "./home.css";
import axios from "axios"


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
      console.log(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </>
  );
}
