import React from 'react'

const ContactUs = () => {
  return (
    <div
    id="contact"
    className="container"
  >
    <div className="contact-container">
      <div className="img-container">
        <img
          src="/images/bg_contact.svg"
          alt="Contact for consultation"
          className=""
        />
      </div>
      <div className="text-container">
        <h1 className="">
          <span className="">Contact for consultation</span>
        </h1>
        <p className="">
          Electronic commerce draws on technologies such as mobile <br />
          Products on online services or over the Internet.
        </p>
        <div className="btn-container">

            <a
              href="#"
              className="btn1"
            >
              Call for appointment
            </a>
            <a
              href="#"
              className="btn2"
            >
              View chember
            </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs