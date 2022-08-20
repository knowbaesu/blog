import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"
import Single from "../../single/Single"
import "./home.css"

export default function Home() {
  return (
    <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
            <Single/>
        </div>
    </>
  )
}
