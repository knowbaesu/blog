import { useEffect, useState } from "react"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import Single from "../single/Single";
import "./home.css";
import axios from "axios"
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()
  console.log("search:",search)


  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+ search)
      setPosts(res.data)
      console.log("res.data:",res.data)
    }
    fetchPosts()
  }, [search])
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
