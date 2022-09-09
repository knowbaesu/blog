import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/resgister/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Write />} />
        <Route path="/" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
