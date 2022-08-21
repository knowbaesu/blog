import "./topbar.css"
import TwitterIcon from '@mui/icons-material/Twitter'
import Instagram from "@mui/icons-material/Instagram"
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';


export default function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <TwitterIcon className="topIcon"/>
          <Instagram className="topIcon"/>
          <FacebookIcon className="topIcon"/>
          <PinterestIcon className="topIcon"/>
        </div>
        <div className="topCenter">
          <ul className="topList">
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGSnYM5Hb4qoCWl5LUJ-LS5OGYWFdYeJSzg&usqp=CAU" alt="" />
          <SearchIcon className="searchIcon"/>
        </div>
    </div>
  )
}
