import AdminHome from "./admin-home/admin-home";
import StudentHome from "./student-home/student-home";
import ProfessorHome from "./professor-home/professor-home";
import { useEffect } from "react";
import {useLocation} from 'react-router-dom';

function Home(props) {
  useEffect(() => {
    document.title = "home";
  }, []);

  const location = useLocation();

  if (location.state.role === "A") {
    return <AdminHome />;
  } else if (location.state.role === "S") {
    return <StudentHome />;
  } else if (location.state.role === "P") {
    return <ProfessorHome />;
  }
}

export default Home;
