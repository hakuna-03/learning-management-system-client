import React from 'react'
import Button from '../../components/button/Button';
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section claseName="home" id="home">
      <div claseName="container-fluid">
        <div claseName="row">
          <div claseName="p-left col-md-5 pb-5">
            <div claseName="left">
              <h2 claseName="title">Learning Management System</h2>
              <p claseName="description">
                LMS used to plan, implement and assess a specific learning process. It's used for e-learning practices and, in its most common form, consists of two elements: a server that performs the base functionality and a user interface (UI) that is operated by instructors, students and administrators.
              </p>
              <Link to="/admin/student" className="start-btn btn">
                Add Student</Link>
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
  )
}

export default Home