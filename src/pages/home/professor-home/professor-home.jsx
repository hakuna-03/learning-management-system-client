import { useEffect } from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import axios from "axios";

function ProfessorHome() {

  


  return (
    <>
      <h1 className="welcome">Welcome Professor</h1>
      <Link to="/professors/classes" className="start-btn btn">
        My Courses
      </Link>
    </>
  );
}

export default ProfessorHome;
