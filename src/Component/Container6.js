import React from 'react'
import '../CSS/container6.css'
const Container6 = () =>{
    return(
      <>
      <div className="container6">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5756511983664!2d77.3134850740155!3d28.582502686353486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45fa267c455%3A0x20e02d4622605a21!2sCETPA%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1688808626171!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <div className="container6_right">
    <div className="form">
      <p className="form_heading">Book a Free Consultation</p>
      <hr />
      <div className="name">
        <input type="text" placeholder="First Name" className="first_name" />
        <input type="text" placeholder="Last Name" className="last_name" />
      </div>
      <input type="tel" placeholder="Phone" />
      <input type="email" placeholder="Email" />
      <textarea
        name="message"
        id="message"
        cols={10}
        rows={3}
        className="message"
        placeholder="Message"
        defaultValue={""}
      />
      <button className="btn form_button">Book Now</button>
    </div>
  </div>
</div>

    </>
    )
    
  }

export default Container6
