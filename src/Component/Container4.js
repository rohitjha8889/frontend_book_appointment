import React from 'react'
import '../CSS/container4.css';
import team1 from '../Image/team-member01.jpg'
import team2 from '../Image/team-member02.jpg'
import team3 from '../Image/team-member03.jpg'

const Container4 = () =>{
    return(
      <>
      <div className="container4">
  <p className="container4_top_heading">Happy Stories</p>
  <hr />
  <div className="container4_box">
    <div className="container4_box1">
      <img src={team1} alt="" width="92px" />
      <p className="container4_para">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate.
      </p>
      <p className="container4_box_heading">Evelyn Jimenez</p>
      <div className="container4_icon">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
      </div>
    </div>
    <div className="container4_box2">
      <div className="container4_image_box">
        <img src={team2} alt="" width="92px" />
      </div>
      <div className="container4_content_box">
        <p className="container4_para">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
        <p className="container4_box_heading">Debra Peters</p>
        <div className="container4_icon">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
      </div>
    </div>
    <div className="container4_box3">
      <div className="container4_image_box">
        <img src={team3} alt="" width="92px" />
      </div>
      <div className="container4_content_box">
        <p className="container4_para">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
        <p className="container4_box_heading">Mark Martinez</p>
        <div className="container4_icon">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
      </div>
    </div>
  </div>
  <div className="container4_bottom">
    <p className="container4_bottom_heading"> Review Us On </p>
    <hr />
    <div className="container4_bottom_icon">
      <i className="fa-brands fa-google" />
      <i className="fa-brands fa-facebook" />
      <i className="fa-brands fa-instagram" />
    </div>
  </div>
</div>

    </>
    )
    
  }

export default Container4
