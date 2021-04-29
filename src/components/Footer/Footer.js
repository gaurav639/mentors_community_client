import React from "react";
import MaterialIcons from "material-icons-react";

import "./Footer.css";

const Footer = () => (
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-box">
          <h4 className="head">MENTOCIRCLE</h4>
          <p className="">Platform for 1-to-1 guidance for the student by alloting mentors for them.</p>
        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>CONTACT US</b>
          </p>
          <p>
            <MaterialIcons icon="location_on" /> KIET GROUP OF INSTITUTIONS
          </p>
          <p>
            <MaterialIcons icon="call" /> +91 8791723358
          </p>
          <p>
            <MaterialIcons icon="mail_outline" /> ritikvarshney2014@gmail.com
          </p>
        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>SUBSCRIBE NEWSLETTER</b>
          </p>
          <input type="email" className="form-control" placeholder="Your Email" />
          <button type="button" className="btn btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;