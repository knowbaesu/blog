import "./sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter'
import Instagram from "@mui/icons-material/Instagram"
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() =>{
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/31/16592809381406.jpg" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, 
            unde cumque provident autem corporis esse repellat hic voluptatum?
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c)=>(
              <li className="sidebarListItem">{c.name}</li> 
            ))}
            
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <div className="sidebarSocial">
            <TwitterIcon className="sidebarIcon"/>
            <Instagram className="sidebarIcon"/>
            <FacebookIcon className="sidebarIcon"/>
            <PinterestIcon className="sidebarIcon"/>
          </div>  
        </div>
    </div>
  )
}
