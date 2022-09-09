import "./register.css";

export default function register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username hahaha"
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email hahaha"
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password hahaha"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
