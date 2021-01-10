import React, { Component } from "react";
import { connect } from "react-redux";

import { modalToggle } from "../../actions/projects";

class ProjectDetail extends Component {
  render() {
    return (
      <div id="project-detail">
        <i className="fas fa-times" onClick={this.props.modalToggle}></i>
        <div className="title">
          {this.props.project.title}
          <div className="term">{this.props.project.term}</div>
        </div>
        <div className="skill">
          <div className="main-skill">
            {this.props.project.main_skill_used
              ? this.props.project.main_skill_used.map((skill, index) => (
                  <em key={index}>{skill}</em>
                ))
              : null}
          </div>
          <div className="sub-skill">
            {this.props.project.sub_skill_used
              ? this.props.project.sub_skill_used.map((skill, index) => (
                  <em key={index}>{skill}</em>
                ))
              : null}
          </div>
        </div>
        <div className="desc">{this.props.project.desc}</div>
      </div>
    );
  }
}

const mapStateToPropsProjectDetail = state => ({
  project: state.projects.project,
});

ProjectDetail = connect(mapStateToPropsProjectDetail, { modalToggle })(
  ProjectDetail
);

class Modal extends Component {
  render() {
    return (
      <div id="modal" className={this.props.modal ? "show flex" : "flex"}>
        <div id="modal-bg" onClick={this.props.modalToggle}></div>
        <ProjectDetail />
      </div>
    );
  }
}

const mapStateToPropsModal = state => ({
  modal: state.projects.modal,
});

export default connect(mapStateToPropsModal, { modalToggle })(Modal);
