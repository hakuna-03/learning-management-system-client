import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './addProfessor.css'
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css"
const AddProfessor = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  console.log(baseURL);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    Role: "",
    collageId: "",
    natId: "",
    enrollmentDate: "",
    gpa: 0,
  });

  const handlerChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const successNotify = () => toast.success('User added successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  const badNotify = () => toast.error('This user already exist', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}professor`, inputs);
      successNotify();
    } catch (err) {
      console.log(err);
      badNotify();
    }
  };

  return (
    //  <!-- start admin add student -->
    <section className="add-user-section col-sm-mb-5" id="add-user">
      <div className="container">
        <h2 className="title">Enter Professor Data</h2>
        <form onSubmit={handleSubmit}
        >
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
            </div>
            <button
              className="submit-btn m-auto w-25 mt-3"
            >
              Submit
            </button>
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
  );
};

export default AddProfessor;