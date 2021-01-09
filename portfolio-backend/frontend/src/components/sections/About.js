import React, { Component } from "react";
import about from "../../assets/about.jpg";

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container flex mw-1200">
          <div className="header">About</div>
          <div className="header-bar"></div>
          <img src={about} width="300px" />
          <div className="content-wrap">
            <div className="header">『Why?』</div>
            <div className="content">
              안녕하세요. 호기심 많은 신입 개발자 길재우입니다.
              <br />
              <br />
              새로운 걸 배우기를 갈망하고 더 깊이 알고 싶어 하는 욕구가 강한
              사람입니다.
              <br />
              2년이 조금 안 되는 기간 동안 관련 문서와 서적을 통해 독학하였고
              혼자서 몇 개의 프로젝트를 진행해 보면서 독학을 통해 얻을 수 있는
              지식과 경험에 한계를 느꼈고 저보다 더 많이 아는 사람들과 일하고
              배우며 성장하고 싶습니다.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
