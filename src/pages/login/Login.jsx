import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="longinForm">
        <label>Email</label>
        <input className="loginInput" type="text" />
        <label>Password</label>
        <input className="loginInput" type="password" />
        <button className="loginButton">Login</button>
      </form>
        <button className="registerButton">Register</button>
    </div>
  )
}
