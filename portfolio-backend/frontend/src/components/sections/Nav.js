import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <div className="mw-1200 box">
          <i className="fas fa-bars mob-menu"></i>
          <ul className="after">
            <li className="dest on" dest="home">
              Home
            </li>
            <li className="dest" dest="about">
              About
            </li>
            <li className="dest" dest="skill">
              Skills
            </li>
            <li className="dest" dest="project">
              Projects
            </li>
            <li className="dest" dest="contact">
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
