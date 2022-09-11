import "./setting.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Face6Icon from '@mui/icons-material/Face6';

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form  className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img src="https://image.fmkorea.com/files/attach/new/20190930/340354/404429026/2235338704/5289a97b14a04b751a42bfd24915b0fc.jpg" alt="" />
              <label htmlFor="fileInput">
              <Face6Icon className="settingsPPIcon" />
              </label>
              <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label >Username</label>
            <input type="text" />
            <label >Email</label>
            <input type="email" />
            <label >Password</label>
            <input type="password" />
            <button className="settingSubmit">Update</button>
          </form>
        </div>
          <Sidebar />
    </div>
  )
}
