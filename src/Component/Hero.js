import React, { useState } from 'react'
import "../CSS/hero.css"
const Hero =(props)=>{

  const[first_name, setFirst_name]=useState("");
  const[last_name, setLast_name]=useState("");
  const[phone, setPhone]=useState("");
  const[email, setEmail]=useState("");
  const[message, setMessage]=useState("");


const collectData = async()=>{
  console.log(first_name, last_name, phone, email, message)

  let result = await fetch('https://appointment-booking-chti.onrender.com/submit',{
    method:'post',
    body:JSON.stringify({first_name, last_name, phone, email, message}),
    headers:{
      'Content-Type':'application/json'
    }
  })

  result = await result.json()
  console.log(result);
  setFirst_name('')
  setLast_name('')
  setPhone('')
  setEmail('')
  setMessage('')
}


    return(
      <>
    <div className="hero_section">
  <div className="hero_section_opacity"> </div>
  <div className="hero_content">
    <div className="hero_section_left">
      <p className="hero_section_small_text">Your Oral Health Matters to Us</p>
      <hr />
      <p className="hero_section_large_text">
        Get Brighter Smile from London's Best Dentists
      </p>
    </div>
    <div className="hero_section_right">
      <div className="form">
        <p className="form_heading">Book a Free Consultation</p>
        <hr />
        <div className="name">
          <input type="text" placeholder="First Name" className="first_name" value={first_name} onChange={(e)=> setFirst_name(e.target.value)}/>
          <input type="text" placeholder="Last Name" className="last_name"  value={last_name} onChange={(e)=> setLast_name(e.target.value)}/>
        </div>
        <input type="tel" placeholder="Phone"  value={phone} onChange={(e)=> setPhone(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <textarea
          name="message"
          id="message"
          cols={10}
          rows={3}
          className="message"
          placeholder="Message"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
        <button className="btn form_button" onClick={collectData
        }>Book Now</button>
      </div>
    </div>
  </div>
</div>

    </>
    )
    
  }

export default Hero;
