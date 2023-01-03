import React,{useState} from "react";
import ModalUI from "../../UI/Modal";

const Footer = ({data}) => {

  return (
    <>
      <div className="footer">
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Impala Intec</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
            Developed by <a href="https://bootstrapmade.com/">Impala Intech</a>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Footer;
