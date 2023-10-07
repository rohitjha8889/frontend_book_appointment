import React from 'react'
import '../CSS/container7.css'
import logo from '../Image/dental-site-logo.svg'
const Container7 = () =>{
    return(
      <>
      <footer>
  <div className="upper_footer">
    <div className="upper_footer_box1">
      <img src={logo} alt="" width={200} />
    </div>
    <div className="upper_footer_box2">
      <p className="footer_heading">Call Us</p>
      <p className="footer_text">+1800 456 789</p>
      <p className="footer_text">+1800 456 780</p>
    </div>
    <div className="upper_footer_box3">
      <p className="footer_heading">Reach Us</p>
      <p className="footer_text">117 Crown Street</p>
      <p className="footer_text">Camberwell, London, UK</p>
    </div>
    <div className="upper_footer_box4">
      <p className="footer_heading">Open Hours</p>
      <p className="footer_text">Mon-Fri 09:00 - 19:00</p>
      <p className="footer_text">Sat-Sun 10:00 - 14:00</p>
    </div>
    <div className="upper_footer_box5">
      <p className="footer_heading">Follow Us</p>
      <div className="container4_bottom_icon footer_btn">
        <i className="fa-brands fa-google" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-instagram" />
      </div>
    </div>
  </div>
  <hr />
  <div className="lower_footer">
    <p className="footer_text">Copyright © 2023 Rohit Kumar Jha</p>
    <p className="footer_text">Powered by Rohit Kumar Jha</p>
  </div>
</footer>

    </>
    )
    
  }
export default Container7
