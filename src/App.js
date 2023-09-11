import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./screens/login/login";
import Home from "./screens/home/home";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
