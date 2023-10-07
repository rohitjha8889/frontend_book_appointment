import React from "react";
import "../CSS/header.css";
import logo from "../Image/dental-site-logo.svg";
import Hero from "./Hero";
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Container6 from './Container6';
import Container7 from './Container7';
const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} width="130px" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Procedures
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn" type="submit">
                Get Appointment
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Hero />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </>
  );
};
export default Home;
