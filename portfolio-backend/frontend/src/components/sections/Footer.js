import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <i className="fas fa-chevron-up to-top flex top dest" dest="home"></i>
        <div className="container flex">
          <p>
            Copyright ⓒ 2020 <em>JWKIL</em> All Rights Reserved.
          </p>
        </div>
      </section>
    );
  }
}

export default Footer;
