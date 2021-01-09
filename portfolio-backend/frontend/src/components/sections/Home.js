import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <section id="home" className="flex">
        <div id="home-bg"></div>
        <div className="flex box">
          <div className="text">개발자 길재우의 포트폴리오입니다</div>
        </div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="dest-about down-arrow"
          dest="about"
        >
          <path
            d="M0 0 L50 100 L100 0 L80 0 L50 60 L20 0 Z"
            fill="white"
            stroke="white"
          ></path>
        </svg>
      </section>
    );
  }
}

export default Home;
