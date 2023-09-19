import { Route, Routes } from "react-router-dom";
import AddStudent from './pages/admin-add-student/Student.jsx';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/student" element={<AddStudent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
