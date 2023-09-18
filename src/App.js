import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Home from "./pages/home/home.js";
import AddProfessor from "./pages/addProfessor/addProfessor.jsx";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/professor" element={<AddProfessor />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
