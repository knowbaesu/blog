import "./write.css"
import AddIcon from '@mui/icons-material/Add';

export default function write() {
  return (
    <div className="write">
        <img className="writeImg" 
        src="https://asroma2-cloudinary.corebine.com/asroma2-production/image/upload/c_fit,dpr_3.0,f_webp,g_center,h_170,q_auto,w_768/v1/asroma2-prod/Roma_shakhtar_header_rzkpad" 
        alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AddIcon className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{display: "none"}} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={"true"} />  
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">발행하기</button>
      </form>
    </div>
  )
}
