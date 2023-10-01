import React, { useEffect, useState } from "react";
import "./professor-classes.css";
import axios from "axios";
import Class from "./class/class";
import NoClasses from "./no-classes/no-classes";
import Navbar from "../../components/navbar/Navbar";

function ProfessorClasses() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [classes, setClasses] = useState([]);

  console.log("refreshment occured");
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) user = JSON.parse(user);
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    if (classes.length === 0) {
      axios
        .get(`${baseUrl}/professors/classes`, config)
        .then((response) => {
          console.log(response.status);
          console.log(response.data.data);
          if (response.status === 200) setClasses(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div claseName="container">
        <h2 claseName="title">Professor Classes:</h2>
        {classes.length > 0 ? (
          <dev className="grid-container">
            {classes.map((el) => {
              return <Class key={el.class_id} class={el} />;
            })}
          </dev>
        ) : (
          <NoClasses />
        )}
      </div>
    </>
  );
}

export default ProfessorClasses;
