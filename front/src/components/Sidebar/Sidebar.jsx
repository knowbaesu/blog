import "./sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter'
import Instagram from "@mui/icons-material/Instagram"
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';


export default function Sidebar() {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
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
