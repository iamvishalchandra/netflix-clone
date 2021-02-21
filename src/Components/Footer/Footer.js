import React from "react";
import "./Footer_Style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className=" footer__contact">
          <p>
            Questions? Call
            <a className="footer__contactNumber" href="tel:000-800-040-1843">
              {" "}
              000-800-040-1843
            </a>
          </p>
        </div>
        <div className="footer__contents">
          <ul className="footer__options">
            <li className="footer__links">FAQ</li>
            <li className="footer__links">Help Centre</li>
            <li className="footer__links">Account</li>
            <li className="footer__links">Media Centre</li>
            <li className="footer__links">Investor Relations</li>
            <li className="footer__links">Jobs</li>
            <li className="footer__links">Ways to Watch</li>
            <li className="footer__links">Terms Of Use</li>
            <li className="footer__links">Privacy</li>
            <li className="footer__links">Cookie Preferences</li>
            <li className="footer__links">Corporate Information</li>
            <li className="footer__links">Contact Us</li>
            <li className="footer__links">Speed Test</li>
            <li className="footer__links">Legal Notice</li>
            <li className="footer__links">Netflix Originals</li>
          </ul>
          {/* <div className="footer__options">
            <h5>FAQ</h5>
            <h5>Investor Relations</h5>
            <h5>Privacy</h5>
            <h5>Speed Test</h5>
          </div>
          <div className="footer__options">
            <h5>Help Centre</h5>
            <h5>Jobs</h5>
            <h5>Cookie Preferences</h5>
            <h5>Legal Notice</h5>
          </div>
          <div className="footer__options">
            <h5>Account</h5>
            <h5>Ways to Watch</h5>
            <h5>Corporate Information</h5>
            <h5>Netflix Originals</h5>
          </div>
          <div className="footer__options">
            <h5>Media Centre</h5>
            <h5>Terms Of Use</h5>
            <h5>Help Centre</h5>
            <h5>Contact Us</h5>
          </div> */}
        </div>
        <div className="footer__contents footer__dropdown">
          <select name="Language">
            <option value="english-us" selected>
              English-US
            </option>
            <option value="english-uk">English-UK</option>
            <option value="english-in">English-IN</option>
            <option value="hindi">हिन्दी</option>
            <option value="urdu">Urdu</option>
          </select>
        </div>
        <div className="footer__contents">Netflix Worlwide</div>
      </div>
    </div>
  );
}

export default Footer;
