import React, { useEffect, useState } from "react";

import "../CSS/admin/dashboard.css";

function Dashboard() {
  const [allPatients, setAllPatients] = useState([]);
  const[checkPatients, setCheckPatients]= useState([]);

  useEffect(() => {
    getAllPatients();
    getAllcheckPatients()
  }, []);

  const getAllPatients = async () => {
    let result = await fetch("https://appointment-booking-chti.onrender.com/allPatients");
    result = await result.json();
    setAllPatients(result.data);
    // console.log(allPatients);
  };
  const getAllcheckPatients = async () => {
    let result = await fetch("https://appointment-booking-chti.onrender.com/checkedpatients");
    result = await result.json();
    setCheckPatients(result.data);
    // console.log(allPatients);
  };



  const handleButtonClick = async (id) => {
    console.log(`Button clicked for item with ID: ${id}`);

    const patient = allPatients.find((item) => item._id === id);
    if (patient) {
      // Create an object with the relevant properties
      const requestBody = {
        first_name: patient.first_name,
        last_name: patient.last_name,
        phone: patient.phone,
        email: patient.email,
        message: patient.message,
      };

      let result = await fetch(`https://appointment-booking-chti.onrender.com/patient/${id}`, {
        method: "post",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // Handle success
            console.log("Data posted successfully");
            getAllPatients();
            getAllcheckPatients();
          } else {
            // Handle error
            console.error("Failed to post data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("Patient not found");
    }
  };
  

  return (
    <>
      <div className="dashboard">
        <nav></nav>

        <div className="top_data">
          <div className="total_patients">
            <p>Remaining Patients</p>
            <p>{allPatients.length}</p>
          </div>
          <div className="total_patients">
            <p>Check Patient</p>
            <p>{checkPatients.length}</p>
          </div>
        </div>

        <h3>Patient List</h3>
        <ul>
          <li>S.No</li>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Phone</li>
          <li>Email</li>
          <li>Message</li>
          <li></li>
        </ul>

        {allPatients.length === 0? (
            <p className="no_patients">No Patients</p>
        ):(
        <div className="class">

        {
        allPatients.map((item, index) => (
          <ul className="allList">
            <li>{index + 1}</li>
            <li>{item.first_name}</li>
            <li>{item.last_name}</li>
            <li>{item.phone}</li>
            <li>{item.email}</li>
            <li>{item.message}</li>
            <li>
              <button onClick={() => handleButtonClick(item._id)}>
                Checked
              </button>
            </li>
          </ul>
        ))}
        </div>
        )}
        
      </div>
    </>
  );
}

export default Dashboard;
