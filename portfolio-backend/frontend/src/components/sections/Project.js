import React, { Component } from "react";
import { connect } from "react-redux";

import { getProjects, getProject } from "../../actions/projects";

class Project extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <>
        {this.props.projects.map((project, index) => (
          <div className="project-wrap" key={index}>
            <img className="thumbnail" src={project.thumbnail}></img>
            <div className="desc">
              <div className="title">{project.title}</div>
              <div className="skills">
                {project.main_skill_used
                  ? project.main_skill_used.join("/")
                  : null}
              </div>
            </div>
            <div
              className="more"
              onClick={this.props.getProject.bind(this, project.id)}
            >
              More
            </div>
            <div className="link">
              <a href={project.site} target="_blank">
                <i className="fas fa-home"></i>
              </a>
              <a href={project.github} target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
});

Project = connect(mapStateToProps, { getProjects, getProject })(Project);

class ProjectWrap extends Component {
  render() {
    return (
      <section id="project">
        <div className="container flex mw-1200">
          <div className="header">Projects</div>
          <div className="header-bar"></div>
          <div className="box">
            <Project />
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectWrap;
