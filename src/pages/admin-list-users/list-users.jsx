import React, { useEffect, useState } from "react";
import "./list-users.css";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, Link } from "react-router-dom";
import User from "./user/user";
import NoUsers from "./no-users/no-users";

function ListUsers() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [students, setStudents] = useState([]);

  console.log("refreshment occured");
  const location = useLocation();
  const role = location.state.role;

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) user = JSON.parse(user);

    if (students.length === 0) {
      axios
        .get(`${baseUrl}/admin/users`, {
          params: {
            role: role,
          },
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then((response) => {
          console.log(response.status);
          console.log(response.data.data);
          if (response.status === 200) setStudents(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {role === "student" && (
          <Link to="/admin/student" className="start-btn btn add-user">
            Add Student
          </Link>
        )}
        {role === "professor" && (
          <Link to="/admin/professor" className="start-btn btn add-user">
            Add Professor
          </Link>
        )}
        <h2 className="title">Collage {role}s:</h2>
        {students.length > 0 ? (
          <dev className="grid-container">
            {students.map((el) => {
              return <User key={el.user_id} user={el} />;
            })}
          </dev>
        ) : (
          <NoUsers role={role} />
        )}
      </div>
    </>
  );
}

export default ListUsers;
