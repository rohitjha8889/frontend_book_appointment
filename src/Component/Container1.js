import React from 'react'
import '../CSS/container1.css'
import home_dentist from '../Image/home-dentist-img-02.jpg'
import doctor from '../Image/docter.jpg'

const Container1 =()=>{
    return(
      <>
     <div className="container1">
  <div className="container1_left">
    <div className="container1_baground">
      <img
        src={home_dentist}
        width={500}
        alt="home_dentist_image"
        className="back_image"
      />
    </div>
    <img src= {doctor} alt="doctor image" className="front_image" width="300px" />
  </div>
  <div className="container1_right">
    <p className="container1_right_heading">Committed To Dental Excellence</p>
    <hr />
    <p className="container1_para1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
      luctus nec ullamcorper mattis.
    </p>
    <div className="container1_para1">
      Urna habitasse imperdiet! Aut, deleniti nisl, varius? Nunc, iure iure nunc
      sit mi ducimus atque nostrum iure ducimus quae dolore. Massa sapien at do
      ipsum nostra adipisicing.
    </div>
    <button className="btn container1_button">Know More</button>
  </div>
</div>

    </>
    )
    
  }

export default Container1
