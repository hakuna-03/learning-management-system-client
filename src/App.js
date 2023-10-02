import { Route, Routes, Navigate } from "react-router-dom";
import AddStudent from "./pages/admin-add-student/Student";
import AddProfessor from "./pages/addProfessor/addProfessor";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import PageNotFound from "./components/pageNoteFound/PageNoteFound"

function App() {
  return (
    // <AuthProvider>
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/admin/student"
            element={
                <AddStudent />
            }
          />
          <Route path="/admin/professor" element={<AddProfessor />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
    // </AuthProvider>
  );
}

export default App;
