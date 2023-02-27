import Link from "next/link";
import React,{useState} from "react";
import ModalUI from "../../UI/Modal";

const Footer = ({data}) => {

  return (
    <>
      <div className="footer">
        <div className="container footer-bottom clearfix">
        <div className="nav-links" >
                          <a href="#about">About doctor</a>
                          <a href="#education">Education</a>
                          <a href="#experience">Experiences</a>
                          <a href="#chamber">Chamber</a>
                          <a href="#speciality">Speciality & Services</a>
                          <a href="#gallery">Gallery</a>
                          <a href="#video-gallery">Video Gallery</a>
                          <a href="#contact">Contact Us</a>
                        </div>

          <div className="facebook" style={{display:"flex",justifyContent:"center", gap:"1rem", alignItems:'center', margin:"2rem 0rem"}}>
          {data?.MediaLinks.map((item) => {
                return (
                  <div className="icon-box">
                    <a href={`https://${item.value}`}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                );
              })}
           {/* <Link href=""> <i style={{fontSize:"1.2rem"}} class="fab fa-youtube"></i></Link> */}
          </div>
          <div className="credits" style={{display:'flex', justifyContent:"center"}}>
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
           <span>Powered by  <a href="digipathy.com"> digipathy.com</a></span> 
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Footer;
