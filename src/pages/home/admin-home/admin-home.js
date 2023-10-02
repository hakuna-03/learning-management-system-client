import React from 'react'
import Button from '../../../components/button/Button';
import "./Home.css";
import { Link } from 'react-router-dom';

function AdminHome(){

    return(
        <section className="home" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="p-left col-md-5 pb-5">
            <div className="left">
              <h2 className="title">Learning Management System</h2>
              <p className="description">
                LMS used to plan, implement and assess a specific learning process. It's used for e-learning practices and, in its most common form, consists of two elements: a server that performs the base functionality and a user interface (UI) that is operated by instructors, students and administrators.
              </p>
              <Link to="/admin/student" className="start-btn btn">
                Add Student</Link>
              <Link to="/admin/professor" className="start-btn btn">
                Add Professor</Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="right">
              <div className="main-img">
                <img src="images/2.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default AdminHome;