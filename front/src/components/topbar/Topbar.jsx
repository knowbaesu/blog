import "./topbar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <TwitterIcon className="topIcon" />
        <Instagram className="topIcon" />
        <FacebookIcon className="topIcon" />
        <PinterestIcon className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGSnYM5Hb4qoCWl5LUJ-LS5OGYWFdYeJSzg&usqp=CAU"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <SearchIcon className="searchIcon" />
      </div>
    </div>
  );
}
