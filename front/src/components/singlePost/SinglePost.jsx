import "./singlePost.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://www.fcbarcelonanoticias.com/uploads/s1/12/48/98/1/jose-mourinho.jpeg?mrf-size=m" alt="" className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
            Lorem ipsum dolor sit.
                <div div className="singlePostEdit">  
                <ModeEditIcon className="singlePostIcon one"/>
                <DeleteIcon className="singlePostIcon two"/>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Autor: <b>Jisoo</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>   
            <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores excepturi omnis cumque aliquid magni 
            molestias harum veritatis quod repellat? Est molestias 
            ad voluptas quibusdam nam aliquid perspiciatis nesciunt voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores excepturi omnis cumque aliquid magni 
            molestias harum veritatis quod repellat? Est molestias 
            ad voluptas quibusdam nam aliquid perspiciatis nesciunt voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores excepturi omnis cumque aliquid magni 
            molestias harum veritatis quod repellat? Est molestias 
            ad voluptas quibusdam nam aliquid perspiciatis nesciunt voluptatibus.
            </p>
        </div>
    </div>
  )
}
