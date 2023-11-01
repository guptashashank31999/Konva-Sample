import React from "react";
import "../App.css"
const Footer = () => {
  return (
    <>
      <footer className="footer-flex">
        <div>
          <small className="" style={{color: "white"}}>
            © 2023 &nbsp;
            <a
                style={{textDecoration : "none" , color: "white"}}
              className=""
              target="_blank"
              href="https://www.velocis.in/"
            >
              Velocis Systems Pvt. Ltd.
            </a>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
