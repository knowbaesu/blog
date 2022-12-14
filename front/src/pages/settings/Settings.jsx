import "./setting.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Face6Icon from '@mui/icons-material/Face6';
import { Context } from "../../context/Context";
import { useContext,useState } from "react";
import axios from "axios";


export default function Settings() {
  const {user} = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  const handleSubmit = async (e)=>{
    e.preventDefault();
    const updatedUser = {
      userId:user._id,
      username:username,
      email:email,
      password:password,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
        try {
          await axios.post("/upload", data);
          }catch(err){}
      }
        try{
          await axios.put("/users/" + user._id, updatedUser);
      } catch(err){}
  }
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form  className="settingsForm" onSubmit={handleSubmit}>
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img src={user.profilePic} alt="" />
              <label htmlFor="fileInput">
              <Face6Icon className="settingsPPIcon" />
              </label>
              <input type="file" id="fileInput" style={{display: "none"}} onChange={(e)=> {setFile(e.target.files[0])}}/>
            </div>
            <label >Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
            <label >Email</label>
            <input type="email" placeholder={user.email}  onChange={(e)=>setEmail(e.target.value)}  />
            <label >Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button className="settingSubmit" type="submit" >Update</button>
          </form>
        </div>
          <Sidebar />
    </div>
  )
}
