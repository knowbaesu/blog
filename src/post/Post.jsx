import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://cdn.sportivomedia.net/news/photo/202204/2928_2811_288.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Perferendis aut nihil doloremque placeat quidem architecto et, 
          accusantium eaque dolorum maiores excepturi sunt commodi 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Perferendis aut nihil doloremque placeat quidem architecto et, 
          accusantium eaque dolorum maiores excepturi sunt commodi 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Perferendis aut nihil doloremque placeat quidem architecto et, 
          accusantium eaque dolorum maiores excepturi sunt commodi 
        </p>
    </div>
  )
}
