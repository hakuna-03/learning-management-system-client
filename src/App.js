import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./screens/login/login";
import Home from "./screens/home/home";
import AddProfessor from "./components/addProfessor/addProfessor.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/add-professor" element={<AddProfessor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
