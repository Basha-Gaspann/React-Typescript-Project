import React from "react";
import "../../Css/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="other-links">
          <div className="footer_title">
            <strong>Other Links</strong>
          </div>
          <div className="footer_list">
            <li>greythr</li>
            <li>atom lms</li>
            <li>clarity</li>
            <li>tech ops</li>
            <li>pms</li>
          </div>
        </div>
        <div className="footer_para">
          <p>
            A GSPANN Product. Copyright © 2023 GSPANN Technologies, Inc. All
            Rights Reserved, SK.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
