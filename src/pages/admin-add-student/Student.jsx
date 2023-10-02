import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

import "./Student.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const successNotify = () =>
  toast.success("User added successfully!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const badNotify = (message) =>
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const AddStudent = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    collageId: "",
    natId: "",
    gpa: null,
  });

  const handlerChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handelError = (err) => {

    let error = err.response.data;
    let message;
    if (!error.errors) message = error.message;
    else message = error.errors[0].msg;
    return message;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user = localStorage.getItem("user");
    if (user) user = JSON.parse(user);
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    try {
      await axios.post(`${baseUrl}/admin/student`, inputs, config);
      successNotify();
    } catch (err) {
      console.log(err);
      const errorMessage = handelError (err);
      badNotify(errorMessage);
    } 
  };

  return (
    <>
      <Navbar />

      <section className="add-user-section col-sm-mb-5" id="add-user">
        <div className="container">
          <h2 className="title">Enter Student Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Password
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={handlerChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Collage Id
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="collageId"
                    placeholder="Enter college Id"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    National Id
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="natId"
                    placeholder="Enter national Id"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    GPA
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    name="gpa"
                    placeholder="Enter student's gpa"
                    step="0.01"
                    min="0"
                    max="5"
                    onChange={handlerChange}
                  />
                </div>
              </div>
              <button className="submit-btn m-auto w-25 mt-3">Submit</button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddStudent;
