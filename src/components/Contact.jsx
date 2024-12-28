import React from "react";
import wp from "../images/w.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
const Contact = () => {
  return (
    <footer>
      <div className="container center-text">
        <ul className="social-icons">
          <li>
            <a
              href="https://instagram.com/k_shubzz?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="insta" src={insta} height={30} width={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="insta" src={twitter} height={30} width={30} />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+918380929236"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="WP" src={wp} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
