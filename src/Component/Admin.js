import React from "react";

import "../CSS/admin.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


function Admin() {
 
  return (
    <>
    <div className="main">
      <div className="left-component">
      <Navbar/>
      </div>

      <div className="right-component">
      <Dashboard/>
      
    </div>
    </div>
    </>
  );
}

export default Admin;
