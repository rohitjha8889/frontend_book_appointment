import React from 'react'
import '../CSS/admin/navbar.css'
import doctor from "../Image/team-member02.jpg";

function Navbar() {
  return (
    <>
    <div className="menu_bar">
          <img src={doctor} alt="doctor img" />
          <span>Dr. Emma </span>
          <ul>
            <li>
              <i class="fa-solid fa-house"></i>Home
            </li>
            <li>
              <i class="fa-solid fa-address-card"></i>About
            </li>
            <li>
              <i class="fa-solid fa-address-book"></i>Contact
            </li>
            <li>
              <i class="fa-solid fa-right-from-bracket"></i>Logout
            </li>
          </ul>
        </div>
    </>

  )
}

export default Navbar
