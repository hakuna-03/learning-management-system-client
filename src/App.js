import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./screens/login/login";
import Home from "./screens/home/home";
import AddProfessor from "./screens/addProfessor/addProfessor.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/professor" element={<AddProfessor/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
