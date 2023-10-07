import React from 'react';
import '../CSS/container3.css';
import icon1 from '../Image/icon01-free-img.png';
import icon2 from '../Image/icon02-free-img.png';
import icon3 from '../Image/icon03-free-img.png';
import icon4 from '../Image/icon04-free-img.png';
import icon5 from '../Image/icon05-free-img.png';
import icon6 from '../Image/icon06-free-img.png';
const Container3= () =>{
    return(
      <>
      <div className="container3">
  <p className="container3_heading">Our Procedures</p>
  <hr />
  <p className="container3_para">
    Urna habitasse imperdiet! Aut, deleniti nisl, varius? Nunc, iure iure nunc
    sit mi ducimus atque nostrum iure ducimus quae dolore. Massa sapien at do
    ipsum nostra adipisicing.
  </p>
  <div className="container3_box">
    <div className="container3_box1">
      <img src={icon1} alt="" width={35} />
      <p className="container3_box_heading">Dental Implants</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
    <div className="container3_box1">
      <img src={icon2} alt="" width={35} />
      <p className="container3_box_heading">Cosmetic Dentistry</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
    <div className="container3_box1">
      <img src={icon3} alt="" width={35} />
      <p className="container3_box_heading">Root Canals</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
    <div className="container3_box1">
      <img src={icon4} alt="" width={35} />
      <p className="container3_box_heading">Teeth Whitening</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
    <div className="container3_box1">
      <img src={icon5} alt="" width={35} />
      <p className="container3_box_heading">Dental X-Rays</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
    <div className="container3_box1">
      <img src={icon6} alt="" width={35} />
      <p className="container3_box_heading">Braces &amp; Implants</p>
      <p className="container3_box_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper.
      </p>
    </div>
  </div>
</div>

    </>
    )
    
  }
export default Container3;
