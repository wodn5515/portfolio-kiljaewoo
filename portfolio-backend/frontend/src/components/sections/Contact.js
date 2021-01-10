import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          height="100"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L 50 100 L 100 0 Z"
            fill="#f5f5f5"
            stroke="#f5f5f5"
          ></path>
        </svg>
        <div className="container flex mw-1200">
          <div className="header">Contact</div>
          <div className="header-bar"></div>
          <div className="content-wrap">
            <a href="https://github.com/wodn5515" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <h1>E-mail : wodn5515@gmail.com</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
