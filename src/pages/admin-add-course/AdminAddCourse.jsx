import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

import "./AdminAddCourse.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const successNotify = (message) =>
  toast.success(message, {
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

const AdminAddCourse = () => {
  const [inputs, setInputs] = useState({
    name: "",
    code: "",
    description: null
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
      const res = await axios.post(`${baseUrl}/admin/courses`, inputs, config);
      successNotify(res.data.message);
    } catch (err) {
      console.log(err);
      const errorMessage = handelError(err);
      badNotify(errorMessage);
    }
  };

  return (
    <>
      <Navbar />

      <section className="add-course-section" id="add-course">
        <div className="container">
          <h2 className="title">Enter course Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Course name
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
                    Course code
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    placeholder="Enter course code"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span htmlFor="lable" className="form-label">
                    Description
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Enter course description"
                    onChange={handlerChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex">
                  <button className="submit-btn m-auto mt-3">Submit</button>
                  </div>
                </div>
              </div>

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

export default AdminAddCourse;
