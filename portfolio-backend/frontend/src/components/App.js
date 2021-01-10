import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Provider } from "react-redux";

import Nav from "./sections/Nav";
import Home from "./sections/Home";
import About from "./sections/About";
import SkillWrap from "./sections/Skill";
import ProjectWrap from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Modal from "./sections/Modal";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
        <Home />
        <About />
        <SkillWrap />
        <ProjectWrap />
        <Contact />
        <Footer />
        <Modal />
      </Provider>
    );
  }
}

const container = document.getElementById("root");
render(<App />, container);
