import AdminHome from "./admin-home/admin-home";
import StudentHome from "./student-home/student-home";
import ProfessorHome from "./professor-home/professor-home";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";


function Home(props) {
  useEffect(() => {
    document.title = "home";
  }, []);

  const location = useLocation();


  return (
    <>
      <Navbar />
      {location.state.role === "admin" && <AdminHome />}
      {location.state.role === "student" && <StudentHome />}
      {location.state.role === "professor" && <ProfessorHome />}
    </>
  );

}

export default Home;
